import React from "react";

const CalculatedResults = ({ data, initialInvestMent }) => {
  console.log(data);
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((yearData, index) => (
          <tr key={index}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            {/* <td>
              {initialInvestMent - yearData.yearlyContribution * yearData.year}
            </td>
            <td>
              {initialInvestMent + yearData.yearlyContribution * yearData.year}
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalculatedResults;
