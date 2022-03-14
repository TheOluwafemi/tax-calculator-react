import React, { useState, useEffect, useCallback } from "react";
import TaxDefinitions from "../../utils/TaxDefinitions.js";
import "./TaxForm.css";

export default function TaxForm({ onFormSubmit }) {
  const initialValues = { country: "", income: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const triggerSubmit = useCallback(() => {
    if (Object.keys(formErrors).length === 0 && submitted) {
      onFormSubmit(formValues);
    }
  }, [formErrors, submitted, onFormSubmit]);

  useEffect(() => {
    triggerSubmit();
    return () => {
      setSubmitted(false);
    };
  }, [triggerSubmit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "income") {
      return setFormValues({ ...formValues, [name]: parseInt(value, 10) });
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validateForm(formValues));
    setSubmitted(true);
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.country) {
      errors.country = "Please select a country";
    }
    if (!values.income) {
      errors.income = "Please enter employees total income";
    }
    return errors;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <select
          name="country"
          id="country"
          className="country-field"
          value={formValues.country}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Country
          </option>
          {Object.keys(TaxDefinitions).map((key, index) => (
            <option key={index} value={key}>
              {key}
            </option>
          ))}
        </select>
        <p className="error-msg">{formErrors.country}</p>
      </div>

      <div className="form-field">
        <input
          type="number"
          name="income"
          id="income"
          className="income-field"
          value={formValues.income}
          onChange={handleChange}
          placeholder="e.g 10000"
        />
        <p className="error-msg">{formErrors.income}</p>
      </div>

      <div className="submit">
        <button className="calculate-btn">Calculate</button>
      </div>
    </form>
  );
}
