import React from "react";
import "./Footer.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
   
        <div className="footer-about">
          <h2>Prakash Bakery</h2>
          <p>Freshly baked goods made with love and the finest ingredients.</p>
        </div>

       
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: *********@gamil.com</p>
          <p>Phone: +91 (9316***0*2)</p>
          <p>Location: F9, Vasna - Bhayli Main Rd, opp. Kalyan Party Plot, Sainath Park, Ashwamegh Nagar, Tandalja, Vadodara, Gujarat 390007</p>
        </div>

       
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/newprakashbakery" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/_prakash_bakery" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prakash Bakery. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
