import { useState, createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { dates } from "../utils/dates";

export const StockContext = createContext();

export const StockContextProvider = ({ children }) => {
  const [stockData, setStockData] = useState([]);
  const [stockInputs, setStockInputs] = useState([]);
  const [stockSelected, setStockSelected] = useState("");
  const [LoadingPanel, setLoadingPanel] = useState(false);
  const [LoadingMessage, setLoadingMessage] = useState(
    "Report will be generated here..."
  );

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

  async function fetchReport(data) {
    console.log("Fetching stock data...");
    console.log(data);
  }

  async function fetchStockData() {
    try {
      const stockData = await Promise.all(
        stockSelected.map(async (ticker) => {
          const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.REACT_APP_POLYGON_API_KEY}`;
          const response = await fetch(url);
          const data = await response.text();
          const status = await response.status;
          if (status === 200) {
            setLoadingMessage("Creating report...");
            return data;
          } else {
            setLoadingMessage("There was an error fetching stock data.....");
          }
        })
      );
      fetchReport(stockData.join(""));
    } catch (err) {
      setLoadingMessage("There was an error fetching stock data.....");
      console.error("error: ", err);
    }
  }

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
        LoadingMessage,
        fetchStockData,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};

export default StockContext;
