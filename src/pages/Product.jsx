import { useEffect, useState, useContext } from "react";
import { fetchProducts } from "../api";
import { CartContext } from "./cartContext";
import "../styles/Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setLoading(false);
      });
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id];
    if (!size) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart({ ...product, selectedSize: size });
  };

  if (loading) return <p className="loading">Loading products...</p>;

  return (
    <div className="product-page">
      <h2 className="product-title">Care Package</h2>
      <div className="product-grid">
        {products.map((product) => {
          const sizes = product.name.includes("hoodie") ? ["L", "XL"] : ["S", "M", "L", "XL"];
          const selectedSize = selectedSizes[product.id] || "";

          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>

              <select
                value={selectedSize}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
                className="product-size"
              >
                <option value="">Select size</option>
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              <button onClick={() => handleAddToCart(product)} className="add-to-cart">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
