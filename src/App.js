import { useContext, useEffect } from "react";
import StockContext from "./contexts/stockContext";
import "./App.css";

function App() {
  const { stockInputs, setStockInputs } = useContext(StockContext);

  useEffect(() => {
    console.log(stockInputs);
  }, [stockInputs]);

  return (
    <div className="App">
      <h1>Stock Predictor App</h1>
      <input type="text" onChange={(e) => setStockInputs(e.target.value)} />
    </div>
  );
}

export default App;
