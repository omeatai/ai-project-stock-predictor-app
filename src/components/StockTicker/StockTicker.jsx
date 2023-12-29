import { useContext } from "react";
import StockContext from "../../contexts/stockContext";

const StockTicker = () => {
  const { stockInputs, setStockInputs, stockSelectedHandler } =
    useContext(StockContext);

  return (
    <main className="flex justify-center items-center mt-8 px-4 w-full">
      <form className="w-full">
        <label className="flex justify-center items-center text-lightGray font-semibold mb-2">
          <h2>Add up to 1-3 Stock Tickers</h2>
        </label>
        <input
          type="text"
          onChange={ (e) => setStockInputs(e.target.value) }
          value={ stockInputs }
          className="border border-2 rounded-lg border-silver w-full p-4 outline-none focus:border-4"
          placeholder="AAPL, MSFT..."
        />
        <button
          type="submit"
          onClick={ (e) => stockSelectedHandler(e) }
          className="flex justify-center items-center bg-blue-400 w-full py-2 px-8 my-4 rounded rounded-lg"
        >
          <img src="assets/add.svg" className="w-8" alt="add" />
        </button>
      </form>
    </main>
  );
};

export default StockTicker;
