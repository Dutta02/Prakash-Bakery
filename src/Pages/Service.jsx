import React, { useState } from "react";
import Data from "../../Produts.json";
import Puffs from "../../Puff.json";
import Cake from "../../Cake.json";
import Roll from "../../Roll.json";
import Pizza from "../../Pizza.json";
import "./Service.css";

function Service() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getFilteredItems = () => {
    switch (selectedCategory) {
      case "Puff":
        return { Puff: Puffs.puffs };
      case "Cake":
        return { Cake: Cake.cakes };
      case "Pizza":
        return { Pizza: Pizza.pizzas }; 
      case "Roll":
        return { Roll: Roll.rolls }; 
      default:
        return Data.categories;
    }
  };

  return (
    <div className="maincontainer">
    <div className="container">
    
      <div className="button-group">
        <button className={selectedCategory === "All" ? "active" : ""} onClick={() => handleCategoryClick("All")}>
          All
        </button>
        <button className={selectedCategory === "Puff" ? "active" : ""} onClick={() => handleCategoryClick("Puff")}>
          Puff
        </button>
        <button className={selectedCategory === "Cake" ? "active" : ""} onClick={() => handleCategoryClick("Cake")}>
          Cake
        </button>
        <button className={selectedCategory === "Pizza" ? "active" : ""} onClick={() => handleCategoryClick("Pizza")}>
          Pizza
        </button>
        <button className={selectedCategory === "Roll" ? "active" : ""} onClick={() => handleCategoryClick("Roll")}>
          Roll
        </button>
      </div>


   
      {Object.entries(getFilteredItems())
        .filter(([category]) => selectedCategory === "All" || category === selectedCategory)
        .map(([category, items]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="items-container">
              {items.map((item) => (
                <div key={item.id} className="item-card">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-content">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
     </div>
    </div>
  );
}

export default Service;

