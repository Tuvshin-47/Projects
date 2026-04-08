import { useState } from "react";
import Front from "./components/FrontBackground";
import "./App.css";
import TopPart from "./components/TopPart";
import Category from "./components/Category";
import RestaurantDetail from "./components/RestaurantDetail";

interface MenuItem {
  itemName: string;
  image: string;
  ingredients?: string[];
  price: string;
}

function App() {
  const [isDelivery, setIsDelivery] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<any | null>(null);
  const [cart, setCart] = useState<any[]>([]); 

  const handleGoBack = () => {
    setSelectedRestaurant(null);
  };

  const addToCart = (item: MenuItem & { restaurantName: string; change?: number }) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        cartItem => cartItem.itemName === item.itemName && cartItem.restaurantName === item.restaurantName
      );

      if (existingItemIndex !== -1) {
        return prevCart
          .map((cartItem, index) =>
            index === existingItemIndex
              ? { ...cartItem, quantity: Math.max((cartItem.quantity || 1) + (item.change || 1), 0) }
              : cartItem
          )
          .filter(cartItem => cartItem.quantity > 0);
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <TopPart isDelivery={isDelivery} setIsDelivery={setIsDelivery} cart={cart} setCart={setCart} />

      {selectedRestaurant ? (
        <RestaurantDetail 
          restaurant={selectedRestaurant} 
          goBack={handleGoBack} 
          addToCart={addToCart} 
          cart={cart}  
        />
      ) : (
        <>
          <Category onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
          <div className="frontBackground">
            <Front
              isDelivery={isDelivery}
              selectedCategory={selectedCategory}
              setSelectedRestaurant={setSelectedRestaurant} 
            />
          </div>
        </>
      )}
    </>
  );
}

export default App;
