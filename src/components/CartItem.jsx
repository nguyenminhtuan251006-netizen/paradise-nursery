import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../features/cart/CartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>
      <h2>Total Cost: ${totalCost}</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}

export default CartItem;
