import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductAdd from "./components/ProductAdd";
import Products from "./components/Products";

function App() {
  const [show, setShow] = useState("home");
  return (
    <>
      <Header setShow={setShow} />

      <main className="py-16">
        {show === "home" && (
          <div className="productWrapper">
            <Products />
            <ProductAdd />
          </div>
        )}

        {show === "cart" && <Cart />}
      </main>
    </>
  );
}

export default App;
