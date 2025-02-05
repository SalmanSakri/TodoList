import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-nav">
      <Link to="/">
        <span>🏠 Home</span>
      </Link>

      <Link to="/contact">
        {" "}
        <span>📜 Contacts</span>
      </Link>
      <span>📋 Eligibilitys</span>
      <span>📚 Resources</span>
      <span>⏰ Contect</span>
    </div>
  );
};

export default Footer;
