import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div className="container">
          <div className="row-selector">
            <div className="column">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact">About</Link>
            </div>
            <div className="column">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact">About</Link>
            </div>
            <div className="column">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact">About</Link>
            </div>
            <div className="column">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact">About</Link>
            </div>
            <div className="column">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact">About</Link>
            </div>
            <div className="column">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
