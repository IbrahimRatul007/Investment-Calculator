import React, { useState } from "react";

const InvestmentForm = ({ onCalculate }) => {
  const [inputValues, setInputValues] = useState({
    currentSavings: 0,
    yearlySavings: 0,
    expectedInterests: 0,
    investmentDuration: 0,
  });

  const resetForm = (e) => {
    e.preventDefault();
    setInputValues({
      currentSavings: 0,
      yearlySavings: 0,
      expectedInterests: 0,
      investmentDuration: 0,
    });
  };

  const storeValues = (e) => {
    e.preventDefault();
    setInputValues((prevValue) => {
      const id = e.target.id;
      return { ...prevValue, [e.target.name]: Number(e.target.value) };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValues, "anne");
    onCalculate(inputValues);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            name="currentSavings"
            type="number"
            id="current-savings"
            value={inputValues.currentSavings}
            onChange={storeValues}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            name="yearlySavings"
            type="number"
            id="yearly-contribution"
            value={inputValues.yearlySavings}
            onChange={storeValues}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            name="expectedInterests"
            type="number"
            id="expected-return"
            value={inputValues.expectedInterests}
            onChange={storeValues}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            name="investmentDuration"
            type="number"
            id="duration"
            value={inputValues.investmentDuration}
            onChange={storeValues}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetForm}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
