import React from "react";
import styles from "./RestaurantDetail.module.css";

interface MenuItem {
  itemName: string;
  image: string;
  ingredients?: string[];
  price: string;
}

interface Restaurant {
  placeName: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryMoney: string;
  menu: MenuItem[];
}

interface RestaurantDetailProps {
  restaurant: Restaurant;
  goBack: () => void;
  addToCart: (item: MenuItem & { restaurantName: string; change?: number }) => void;
  cart: any[  ];
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, goBack, addToCart, cart }) => {
  const updateQuantity = (item: MenuItem, restaurantName: string, change: number) => {
    addToCart({
      ...item,
      restaurantName,
      change,
    });
  };  

  return (
    <div className={styles.restaurantDetail}>
      <button onClick={goBack} className={styles.backButton}>← Back</button>
      <img src={restaurant.image} alt={restaurant.placeName} className={styles.restaurantImage} />
      <h1>{restaurant.placeName}</h1>

      <div className={styles.information}>
        <img src="/star-fill.svg" alt="Star Rating" />
        <div>{restaurant.rating}</div>
        <img src="/time-icon.svg" alt="Delivery Time" />
        <div>{restaurant.deliveryTime}</div>
        <img src="/delivery.svg" alt="Delivery Cost" />
        <span style={{ color: restaurant.deliveryMoney === "Free" ? "#0FA958" : "inherit" }}>
          {restaurant.deliveryMoney}
        </span>
      </div>

      <h2>Menu</h2>
      <div className={styles.menuList}>
        {restaurant.menu.length > 0 ? (
          restaurant.menu.map((item: MenuItem, index: number) => {
            const cartItem = Array.isArray(cart) 
  ? cart.find(cartItem => cartItem.itemName === item.itemName && cartItem.restaurantName === restaurant.placeName)
  : undefined;

            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div key={index} className={styles.menuItem}>
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.itemName}</h3>
                  <p className={styles.itemPrice}>{item.price}</p>
                  <p className={styles.itemIngredients}>{item.ingredients?.join(", ") || "No ingredients listed"}</p>
                </div>


                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.itemName} className={styles.itemImage} />
                  <div className={styles.quantityControls}>
                    <button className={styles.quantityButton} onClick={() => updateQuantity(item, restaurant.placeName, -1)}>−</button>
                    <span>{quantity}</span>
                    <button className={styles.quantityButton} onClick={() => updateQuantity(item, restaurant.placeName, 1)}>+</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
