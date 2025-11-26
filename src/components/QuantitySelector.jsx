import React from "react";
import "../styles/Quantityselector.css";

export default function QuantitySelector({ value, onChange }) {
  return (
    <div className="qty-selector">
      <button onClick={() => onChange(Math.max(1, value - 1))}>-</button>
      <span>{value}</span>
      <button onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}
