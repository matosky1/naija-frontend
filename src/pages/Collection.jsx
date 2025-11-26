// import React, { useEffect, useState } from "react";
// import { fetchProducts } from "../api";
// import ProductCard from "../components/ProductCard";
// import "../styles/Collection.css";

// export default function Collection() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadProducts() {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (err) {
//         console.error("Error loading products:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadProducts();
//   }, []);

//   if (loading) {
//     return <div className="collection-loading">Loading products...</div>;
//   }

//   return (
//     <div className="collection">
//       <h2>Care Package</h2>
//       <div className="product-grid">
//         {products.length > 0 ? (
//           products.map((p) => <ProductCard key={p.id} product={p} />)
//         ) : (
//           <p>No products available at the moment.</p>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "../components/productCard";
import "../styles/Collection.css";

export default function Collection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) {
    return <div className="collection-loading">Loading products...</div>;
  }

  return (
    <div className="collection-page">
      <header className="collection-header">
        
        <p>Explore our curated streetwear essentials — crafted for comfort, designed for confidence.</p>
      </header>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <p>No products available at the moment.</p>
        </div>
      )}
    </div>
  );
}
 