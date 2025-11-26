import React from "react";
import { useLocation } from "react-router-dom";

export default function ThankYou() {
  const location = useLocation();
  const { paymentId, amount } = location.state || {};

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <p><strong>Transaction ID:</strong> {paymentId}</p>
      <p><strong>Amount Paid:</strong> ${amount}</p>
      <button onClick={() => window.location.href = "/"}>Return Home</button>
    </div>
  );
}
