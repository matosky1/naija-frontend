const API_URL = "https://naija-backend.onrender.com/api/square"; // backend base

// Fetch all products
export async function fetchProducts() {
  const res = await fetch("https://naija-backend.onrender.com/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
