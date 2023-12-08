import { useState, createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const StockContext = createContext();

export const StockContextProvider = ({ children }) => {
  const [stockData, setStockData] = useState([]);
  const [stockInputs, setStockInputs] = useState([]);
  const [stockSelected, setStockSelected] = useState("");
  const [LoadingPanel, setLoadingPanel] = useState(false);

  const toastifyConfig = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const stockSelectedHandler = (e) => {
    e.preventDefault();
    if (stockInputs.length === 0) {
      toast.error("Please enter a stock ticker", toastifyConfig);
      return;
    }

    const stockInputsCleaned = stockInputs
      .toString()
      .toUpperCase()
      .replace(/\s+/gi, "");

    const stockInputsArr = stockInputsCleaned
      .split(",")
      .filter((item) => item !== "");

    setStockSelected(stockInputsArr);

    stockInputsArr.forEach((stockInput) => {
      if (stockInput.length > 5) {
        toast.error(
          "Please enter only valid stock tickers, not more than 5 characters per stock",
          toastifyConfig
        );
        setStockSelected("");

        return;
      }
    });

    setStockInputs("");
  };

  return (
    <StockContext.Provider
      value={{
        stockData,
        setStockData,
        stockInputs,
        setStockInputs,
        stockSelected,
        setStockSelected,
        stockSelectedHandler,
        LoadingPanel,
        setLoadingPanel,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};

export default StockContext;
