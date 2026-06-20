import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7f" },
      { id: 2, name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5" },
      { id: 3, name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1509423350716-97f2360af8e4" },
      { id: 4, name: "Rubber Plant", price: 20, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
      { id: 5, name: "Boston Fern", price: 16, image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb" },
      { id: 6, name: "Areca Palm", price: 22, image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85" },
    ],
  },
  {
    category: "Aromatic Fragrant Plants",
    plants: [
      { id: 7, name: "Lavender", price: 14, image: "https://images.unsplash.com/photo-1528756514091-dee5ecaa3278" },
      { id: 8, name: "Rosemary", price: 10, image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662" },
      { id: 9, name: "Mint", price: 8, image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec" },
      { id: 10, name: "Jasmine", price: 18, image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d" },
      { id: 11, name: "Gardenia", price: 20, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946" },
      { id: 12, name: "Basil", price: 9, image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a" },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      { id: 13, name: "Aloe Vera", price: 12, image: "https://images.unsplash.com/photo-1509423350716-97f2360af8e4" },
      { id: 14, name: "Cactus", price: 10, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc" },
      { id: 15, name: "ZZ Plant", price: 19, image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361" },
      { id: 16, name: "Pothos", price: 13, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
      { id: 17, name: "Jade Plant", price: 15, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
      { id: 18, name: "Monstera", price: 25, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems({ ...addedItems, [plant.id]: true });
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <span>Shopping Cart</span>
      </nav>

      <section className="product-list">
        <h1>Product Listing Page</h1>

        {plantCategories.map((group) => (
          <div key={group.category}>
            <h2>{group.category}</h2>

            <div className="products">
              {group.plants.map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems[plant.id]}
                  >
                    {addedItems[plant.id] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProductList;
