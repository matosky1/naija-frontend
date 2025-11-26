import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './cartContext';
import '../styles/Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Size: {item.selectedSize}</p>
              <p>Qty: {item.quantity}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id, item.selectedSize)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Cart Total: ${totalPrice.toFixed(2)}</h3>
        <button className="checkout-button" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
