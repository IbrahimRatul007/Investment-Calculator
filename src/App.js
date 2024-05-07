import Header from "./components/Header";
import InvestmentForm from "./components/Investment-form";
import CalculatedResults from "./components/CalculatedResults";

function App() {
  return (
    <div>
      <Header />
      <InvestmentForm />
      <CalculatedResults />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
