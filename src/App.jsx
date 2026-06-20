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
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Your online destination for beautiful houseplants.</p>
            <button onClick={() => setPage("products")}>Get Started</button>
          </div>
        </div>
      )}

      {page !== "landing" && (
        <nav className="navbar">
          <h2>Paradise Nursery</h2>
          <button onClick={() => setPage("products")}>Products</button>
          <button onClick={() => setPage("about")}>About Us</button>
          <button onClick={() => setPage("cart")}>Cart</button>
        </nav>
      )}

      {page === "products" && <ProductList />}
      {page === "about" && <AboutUs />}
      {page === "cart" && <CartItem />}
    </div>
  );
}

export default App;
