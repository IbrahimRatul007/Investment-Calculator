import Header from "./components/Header";
import InvestmentForm from "./components/Investment-form";
import CalculatedResults from "./components/CalculatedResults";
import { useState } from "react";

function App() {
  const [results, setResults] = useState(null);
  const calculateHandler = (userInput) => {
    const yearlyData = [];
    let currentSavings = userInput.currentSavings;
    const yearlyContribution = userInput.yearlySavings;
    const expectedReturn = userInput.expectedInterests / 100;
    const duration = userInput.investmentDuration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setResults((prev) => (prev = yearlyData));
    // console.log(yearlyData);
  };
  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} />

      {!results && <p>No data to Show</p>}
      {results && (
        <CalculatedResults
          data={results}
          initialInvestment={results.currentSavings}
        />
      )}
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
