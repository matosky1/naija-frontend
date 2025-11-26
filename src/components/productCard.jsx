import React, { useState, useContext } from 'react';
import '../styles/productcard.css';
import { CartContext } from '../pages/cartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const {
    image,
    name = 'Untitled',
    description = '',
    price = 0,
    id,
  } = product;

  // ✅ Format price for CAD
 const displayPrice = typeof price === 'number'
  ? new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
    }).format(price)
  : 'CAD $0.00';

  // ✅ Fallback image logic
  const imageSrc = typeof image === 'string' && image.startsWith('http')
    ? image
    : '/images/default.jpg'; // make sure this file exists in public/images/

  // ✅ Size options based on product name
  const sizes = name.toLowerCase().includes('hoodie') ? ['L', 'XL'] : ['S', 'M', 'L', 'XL'];

  const handleAdd = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart({ ...product, selectedSize, quantity });
  };

  return (
    <div className="product-card">
      <div className="pc-image">
        <img src={imageSrc} alt={name} />
      </div>

      <div className="pc-meta">
        <h3 className="pc-title">{name}</h3>
        <p className="pc-description">{description}</p>
        <div className="pc-price">{displayPrice}</div>

        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="product-size"
        >
          <option value="">Select size</option>
          {sizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="product-quantity"
        />

        <button onClick={handleAdd} className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}
