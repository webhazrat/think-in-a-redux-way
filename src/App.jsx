import "./App.css";
import CalculateTransaction from "./components/CalculateTransaction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="container">
          <CalculateTransaction />
          <TransactionForm />
          <Transactions />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
