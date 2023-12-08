import { useContext, useEffect } from "react";
import StockContext from "../../contexts/stockContext";
import openAIResponse from "../../utils/openai";

const StockReport = () => {
  const {
    stockSelected,
    stockData,
    LoadingPanel,
    LoadingMessage,
    fetchStockData,
  } = useContext(StockContext);

  useEffect(() => {
    openAIResponse();
  }, []);

  return (
    <main>
      <section className="flex justify-center items-center mt-2 px-4 w-screen">
        {stockSelected ? (
          <button
            type="button"
            onClick={() => {
              fetchStockData();
            }}
            className="flex justify-between items-center text-xl font-semibold text-white bg-red-400 w-full py-2 px-8 my-4 rounded rounded-lg"
          >
            <img src="assets/cloud.svg" className="w-8" alt="add" />
            GENERATE REPORT
          </button>
        ) : (
          <button
            type="button"
            disabled={true}
            className="flex justify-between items-center text-xl font-semibold text-white bg-zinc-400 w-full py-2 px-8 my-4 rounded rounded-lg"
          >
            <img src="assets/cloud.svg" className="w-8" alt="add" />
            GENERATE REPORT
          </button>
        )}
      </section>
      <section className="flex justify-center items-center  w-screen">
        {LoadingPanel ? (
          <img src="assets/loader.svg" className="w-8" alt="add" />
        ) : (
          ""
        )}
      </section>
      <section className="flex justify-center items-center  w-screen">
        <textarea
          className="border border-2 border-white rounded-2xl bg-zinc-400 text-sm text-zinc-200 outline-none w-full p-4 m-4"
          name=""
          id=""
          cols="30"
          rows="10"
          disabled={true}
          value={stockData.length > 0 ? stockData : LoadingMessage}
        ></textarea>
      </section>
    </main>
  );
};

export default StockReport;
