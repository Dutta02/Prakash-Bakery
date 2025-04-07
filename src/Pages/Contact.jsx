import React, { useState } from "react";
import "./Contact.css";
import { FaStar, FaThumbsUp } from "react-icons/fa";

function NewContact() {
  const [rating, setRating] = useState(null);

  return (
    <div className="new-contact-container">
      <div className="new-contact-form">
        <h2>Contact Us</h2>
        <form>
          <label>Your Name:<span></span></label>
          <div className="new-name-fields">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <label>Your Email:<span></span></label>
          <input type="email" placeholder="Enter your email" required />

          <label>Rate Us:<span></span></label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star}>
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  onClick={() => setRating(star)}
                />
                <FaStar
                  color={star <= rating ? "#ffc107" : "#e4e5e9"}
                  size={40}
                  className="star-icon"
                />
              </label>
            ))}
          </div>

          {rating === 5 && (
            <div className="thumbs-up">
              <FaThumbsUp size={50} color="#00aaff" />
            </div>
          )}

          <label>Your Message:<span></span></label>
          <textarea placeholder="Enter your message..." required></textarea>

          <button type="submit">Send Message →</button>
        </form>
      </div>
    </div>
  );
}

export default NewContact;
