import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import StockTicker from "./components/StockTicker/StockTicker";
import StockChoice from "./components/StockChoice/StockChoice";
import StockReport from "./components/StockReport/StockReport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className=" bg-white w-screen h-screen">
      <Navbar />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <StockTicker />
      <StockChoice />
      <StockReport />
    </div>
  );
}

export default App;
