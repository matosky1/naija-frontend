import React, { useState } from "react";
import "../styles/ShippingForm.css";

export default function ShippingForm({ onSubmit }) {
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "Canada",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="shipping-form" onSubmit={handleSubmit}>
      <h2>Shipping Address</h2>

      <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required />
      <input name="address" placeholder="Street Address" value={form.address} onChange={handleChange} required />
      <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
      <input name="province" placeholder="Province" value={form.province} onChange={handleChange} required />
      <input name="postalCode" placeholder="Postal Code" value={form.postalCode} onChange={handleChange} required />
      <input name="country" placeholder="Country" value={form.country} onChange={handleChange} required />

      <button type="submit">Continue to Payment</button>
    </form>
  );
}
