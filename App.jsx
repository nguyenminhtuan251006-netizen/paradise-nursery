import React, { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [page, setPage] = useState("landing");

  return (
    <div>
      {page === "landing" && (
        <section className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Your one-stop shop for beautiful houseplants.</p>
            <button onClick={() => setPage("products")}>Get Started</button>
          </div>
        </section>
      )}

      {page !== "landing" && (
        <nav className="navbar">
          <h2>Paradise Nursery</h2>
          <div>
            <button onClick={() => setPage("products")}>Products</button>
            <button onClick={() => setPage("about")}>About Us</button>
            <button onClick={() => setPage("cart")}>Cart</button>
          </div>
        </nav>
      )}

      {page === "products" && <ProductList />}
      {page === "about" && <AboutUs />}
      {page === "cart" && <CartItem />}
    </div>
  );
}

export default App;
