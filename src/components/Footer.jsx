import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Naija</h2>

        <div className="footer-links">
          <a
            href="https://instagram.com/naija_streetwearfashion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer-icon" />
          </a>
          <a href="mailto:naijastreetwearfashionbrand@gmail.com">
            <MdEmail className="footer-icon" />
          </a>
          <a
            href="https://wa.me/+17802573743"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="footer-icon" />
          </a>
          <a
            href="https://www.facebook.com/naija.street.wear/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="footer-icon" />
          </a>
          <a
            href="https://tiktok.com/@naija.street.wear"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="footer-icon" />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Naija. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
