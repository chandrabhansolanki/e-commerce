import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {Link} from "react-router-dom"
import "./Cart.css";

const Cart = () => {
  //cart data
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector((state) => state?.resumeReducer?.cart);
  useEffect(() => {
    let total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(total);
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="cart-main-container">
            <div className="cart-container-page">
              {cart.map((item) => (
                <CartItem item={item} />
              ))}
            </div>
            <div >
              <div>
                <h1>Your Cart Summary</h1>
              </div>
              <p>
                <span>Total Items</span>: {cart.length}
              </p>
              <p>
                <span>Total Amount : {totalAmount}</span>
              </p>
              <button  className="shop-now">Checkout Item</button>
            </div>
          </div>
        </>
      ) : (
        <div className="your-cart-empty">
        <h1>
          Your cart is empty!
        </h1>
        <Link to="/">
          <button className="shop-now">
            SHOP NOW
          </button>
        </Link>
      </div>
      )}
    </>
  );
};

export default Cart;
