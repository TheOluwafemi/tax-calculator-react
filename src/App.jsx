import { useState, useEffect } from "react";
import "./App.css";
import TaxForm from "./components/TaxForm/TaxForm";
import TaxDefinitions from "./utils/TaxDefinitions";
import TaxResult from './components/TaxResult/TaxResult'

function App() {
  const [taxFormValues, setTaxFormValues] = useState({});
  const [employerTaxAmounts, setEmployerTaxAmounts] = useState({});
  const [employeeTaxAmounts, setEmployeeTaxAmounts] = useState({});

  useEffect(() => {
    if (Object.keys(taxFormValues).length) {
      calculateTax(taxFormValues.country);
    }
  }, [taxFormValues]);

  const initTaxCalculation = (values) => {
    setTaxFormValues(values);
  };

  const calculateTax = (country) => {
    calculateEmployerTax(TaxDefinitions[country].employerTaxes);
    calculateEmployeeTax(TaxDefinitions[country].employeeTaxes);
  };

  const calculateEmployerTax = (employerTax) => {
    try {
      employerTax.map((tax) => {
        // when tax is direct type, return the direct tax and update state for employer
        if (tax.type === "direct" && Object.keys(taxFormValues).length) {
          let directTax = {};
          directTax[tax.name] = calculateDirectTax(
            taxFormValues.income,
            getRate(tax.percentage)
          ).toFixed(2);
          setEmployerTaxAmounts((prevState) => ({ ...prevState, ...directTax }));
        }
        // when tax is progressive type, return the sum for all brackets and update state for employer
        if (tax.type === "progressive" && Object.keys(taxFormValues).length) {
          let progressiveTax = {};
          let progressiveTaxTemp = calculateProgressiveTax(taxFormValues.income, tax.brackets);
          progressiveTax[tax.name] = progressiveTaxTemp.reduce((a, b) => a + b).toFixed(2);
          setEmployerTaxAmounts((prevState) => ({ ...prevState, ...progressiveTax }));
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const calculateEmployeeTax = (employeeTax) => {
    try {
      employeeTax.map((tax) => {
        // when tax is direct type, return the direct tax and update state for employer
        if (tax.type === "direct" && Object.keys(taxFormValues).length) {
          let directTax = {};
          directTax[tax.name] = calculateDirectTax(
            taxFormValues.income,
            getRate(tax.percentage)
          ).toFixed(2);
          setEmployeeTaxAmounts((prevState) => ({ ...prevState, ...directTax }));
        }

        // when tax is progressive type, return the sum for all brackets and update state for employer
        if (tax.type === "progressive" && Object.keys(taxFormValues).length) {
          let progressiveTax = {};
          let progressiveTaxTemp = calculateProgressiveTax(taxFormValues.income, tax.brackets);
          progressiveTax[tax.name] = progressiveTaxTemp.reduce((a, b) => a + b).toFixed(2);
          setEmployeeTaxAmounts((prevState) => ({ ...prevState, ...progressiveTax }));
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  /* this function calculates the direct tax type, 
    where you simply need to get the percentage of an income
    */
  const calculateDirectTax = (grossIncome, rate) => {
    return rate * grossIncome;
  };

  /* this function calculates the progressive type of tax, 
    where tax is calculated for each bracket levels
    Returns: an array of values for each bracket
     */
  const calculateProgressiveTax = (grossIncome, taxBrackets) => {
    return taxBrackets.map((bracket, index) => {
      const previousMaxAmount = index > 0 ? taxBrackets[index - 1].maxAmount : 0;
      let incomeToBeTaxed = Math.min(
        grossIncome - previousMaxAmount,
        bracket.maxAmount - previousMaxAmount
      );
      incomeToBeTaxed = Math.max(0, incomeToBeTaxed);
      return incomeToBeTaxed * getRate(bracket.percentage);
    });
  };

  // convert percentage into rate
  const getRate = (value) => {
    return (Number(value) / 100).toFixed(2);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Tax Calculator</h1>
      </header>

      <section className="form-area">
        <TaxForm onFormSubmit={initTaxCalculation} />
      </section>

      {Object.keys(employerTaxAmounts).length && Object.keys(employeeTaxAmounts).length ? (
        <section className="result-area">
          <TaxResult
            company={employerTaxAmounts}
            employee={employeeTaxAmounts}
            income={taxFormValues.income}
          />
        </section>
      ) : (
        <small className="result-area">
          Enter the Employee's company and Gross Salary to Calculate
        </small>
      )}
    </div>
  );
}

export default App;
