import { useState, createContext } from "react";

export const StockContext = createContext();

export const StockContextProvider = ({ children }) => {
  const [stockTickers, setStockTickers] = useState([]);
  const [stockInputs, setStockInputs] = useState("");

  return (
    <StockContext.Provider
      value={{ stockTickers, setStockTickers, stockInputs, setStockInputs }}
    >
      {children}
    </StockContext.Provider>
  );
};

export default StockContext;
