import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { CartContext } from "../pages/cartContext"; // ✅ Import CartContext
import "../styles/header.css";

export default function Header() {
  const [user, setUser] = useState(null);
  const { cartItems } = useContext(CartContext); // ✅ Access cart items

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // ✅ Calculate total quantity
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Left side (Nav Links) */}
        <nav className="header-left">
          <Link to="/collection">Collections</Link>
          <Link to="/story">Stories</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Center Logo */}
        <div className="header-center">
          <Link to="/home" className="logo">Naija</Link>
        </div>

        {/* Right side (Cart + Auth) */}
        <div className="header-right">
          <Link to="/cart" className="cart-link">
            <div className="cart-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cart-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="cart-count-badge">{cartCount}</span>
              )}
            </div>
          </Link>

          {/* Auth Links */}
          {user ? (
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}
