import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartContext";
import "../styles/Checkout.css";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import ShippingForm from "../components/ShippingForm";

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [shippingData, setShippingData] = useState(null);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleShippingSubmit = async (data) => {
  setShippingData(data);

  // Send to backend shipping route
  await fetch("https://naija-backend.onrender.com/api/shipping", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};


  const handlePayment = async (token, buyer) => {
    try {
      const response = await fetch("https://naija-backend.onrender.com/api/square/charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sourceId: token.token,
          amount: totalPrice,
          shipping: shippingData, // optional: send to backend if needed
        }),
      });

      const result = await response.json();

      if (result.errors) {
        alert("Payment failed: " + result.errors[0].detail);
      } else if (result.success || result.payment) {
        clearCart();
        navigate("/thank-you", {
          state: {
            paymentId: result.payment?.id || "N/A",
            amount: totalPrice.toFixed(2),
            shipping: shippingData,
          },
        });
      } else {
        alert("Payment failed. Please check your card details.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="checkout-wrapper">
      <h1 className="checkout-heading">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="checkout-empty">Your cart is empty.</p>
      ) : !shippingData ? (
        <ShippingForm onSubmit={handleShippingSubmit} />
      ) : (
        <>
          <div className="checkout-list">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-card">
                <img src={item.image} alt={item.name} className="checkout-thumb" />
                <div className="checkout-info">
                  <h3>{item.name}</h3>
                  <p>Size: {item.selectedSize}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-footer">
            <div className="checkout-total">
              <span>Total:</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <PaymentForm
              applicationId="sq0idp-czyDEpOXP8ZuIq1hpLQYeA"
              locationId="L97JC6JHWXMEG"
              cardTokenizeResponseReceived={handlePayment}
            >
              <CreditCard />
            </PaymentForm>
          </div>
        </>
      )}
    </div>
  );
}
