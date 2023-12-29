import { useState, createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { dates } from "../utils/dates";
import openAIResponse from "../utils/openai";

export const StockContext = createContext();

export const StockContextProvider = ({ children }) => {
  const [stockDataReport, setStockDataReport] = useState([]); // Fetched Data Report
  const [stockInputs, setStockInputs] = useState([]); // String of stock ticker inputs
  const [stockSelected, setStockSelected] = useState(""); // Array with all selected Inputs after submission
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
    const report = await openAIResponse(data);
    console.log(report);
    setStockDataReport(report);
    setLoadingMessage(report);
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
            toast.error(
              "There was an error fetching stock data.....",
              toastifyConfig
            );
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
      value={ {
        stockDataReport,
        setStockDataReport,
        stockInputs,
        setStockInputs,
        stockSelected,
        setStockSelected,
        stockSelectedHandler,
        LoadingPanel,
        setLoadingPanel,
        LoadingMessage,
        fetchStockData,
      } }
    >
      { children }
    </StockContext.Provider>
  );
};

export default StockContext;
