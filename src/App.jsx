import "./App.css";
import TaxForm from "./components/TaxForm/TaxForm";

const initTaxCalculation = (values) => {
  console.log(values);
};

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Tax Calculator</h1>
      </header>

      <section className="form-area">
        <TaxForm onFormSubmit={initTaxCalculation} />
      </section>
    </div>
  );
}

export default App;
