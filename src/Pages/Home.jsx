import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
     
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Sweet Delights Bakery</h1>
          <p>Freshly baked treats, made with love.</p>
          <a href="#menu" className="btn">Explore Menu</a>
        </div>
      </section>

      
      <section id="menu" className="menu-section">
        <h2>Our Best Sellers</h2>
        <div className="menu-grid">
          {[
          { name: "Famous Puff", src: "src/assets/DataPuff17.jpg"},
          { name: "Sev Mayonnies Puff", src: "src/assets/aboutus1.jpg"},
          { name: "Chocolate Cupcake", src: "src/assets/HomeCupCake.jpg"},
          
          ].map((item, index) => (
            <div key={index} className="menu-item">
            <img src={item.src} alt={item.name} />
            <p className="color">{item.name}</p>
          </div>
          
          ))}
        </div>
      </section>

   
      <section className="contact">
        <h2>Visit Us Today!</h2>
        <p>📍 123 Prakash bakery, Vadodara, Gujarat </p>
        <p>📞 +91 9316* 67**2</p>
        <Link to="/StoreLocater" className="store-locator-link">Find a Store</Link>
      </section>
    </div>
  );
}

export default Home;

