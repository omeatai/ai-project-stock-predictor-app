import React, { useContext } from "react";
import StockContext from "../../contexts/stockContext";

const StockChoice = () => {
  const { stockSelected } = useContext(StockContext);
  const stockSelectedMapped =
    stockSelected &&
    stockSelected.map((stock, index) => {
      if (index === stockSelected.length - 1) {
        return `${stock}`;
      } else {
        return `${stock}, `;
      }
    });

  return (
    <section className="flex justify-center items-center px-4 w-full text-2xl text-blue-400">
      { stockSelected ? (
        <h3>{ stockSelectedMapped }</h3>
      ) : (
        "Stock Tickers here...."
      ) }
    </section>
  );
};

export default StockChoice;
