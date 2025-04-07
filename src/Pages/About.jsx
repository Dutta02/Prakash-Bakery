import React from "react";
import "./About.css";
import { FaArrowRight } from "react-icons/fa"

function About() {
  const products = [
    { image: "src/assets/aboutus1.jpg", title: "Best Sellers" },
    { image: "src/assets/Aboutus2.jpg", title: "Pizza Puff" },
    { image: "src/assets/Aboutus3.jpg", title: "Simple Fresh Puff" },
    { image: "src/assets/aboutus4.jpg", title: "Cupcakes" },
    { image: "src/assets/aboutus6.jpg", title: "Cakes" },
  ];

  return (
    <section className="about">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img src="src/assets/Aboutus.jpg" alt="Bakery Storefront" />
        </div>
        <div className="about-content">
          <h1>Our Story</h1>
          <p>
            Since 1996, Prakash Bakery has been one of the most cherished bakeries,
            setting the standard for delicious baked goods. We take pride in our journey 
            from a small neighborhood shop to a bakery loved by all. Over the years, we have 
            perfected the art of baking, using only the finest ingredients and traditional 
            recipes passed down through generations.
          </p>
        </div>
      </div>

      <div className="join-team">
        <div className="team-content">
          <h2>Join Our Team</h2>
          <p>
            Hospitality is at the heart of the Prakash Bakery experience. We believe in 
            fostering a respectful and welcoming work environment where creativity and 
            passion thrive. If you have a love for baking and a desire to bring joy to 
            people through delicious treats, we’d love to have you on board.
          </p>
        </div>
        <div className="team-image">
          <img src="src/assets/Aboutusjoinus.jpg" alt="Bakers Working" />
        </div>
      </div>

      <section className="giving-back">
        <div className="giving-back-container">
          <div className="giving-back-image">
            <img src="src/assets/Aboutusgiving.jpg" alt="Bakery" />
          </div>
          <div className="giving-back-content">
            <h2>Giving Back</h2>
            <p>
              Even though we are famous in Vadodara, Gujarat, Prakash Bakery remains a 
              neighborhood bakery at heart. We are committed to serving our local communities 
              by supporting small businesses, charities, schools, and bake sales.
            </p>
          </div>
        </div>
      </section>

      <section className="products-section">
        <h2 className="products-title">Our Products</h2>
        <p className="products-description">
          For more than 45 years, Prakash Bakery has been making all types of puffs and 
          baked goods the old-fashioned way in small batches, using the finest ingredients.
        </p>
        <div className="products-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="newsletter">
      <div className="newsletter-container">
        <h2>Join our <span>Newsletter</span></h2>
        <p>
          Get the freshest Prakash Bakery updates and offers right to your inbox! <br />
          Plus, enjoy <strong>10% off</strong> on your birthday when you share the date with us!
        </p>
        <div className="newsletter-input">
          <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" />
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
    </section>
  );
}

export default About;
