import React, { useState, useEffect, useRef } from "react";
import OrderSwitch from "./Switch";

interface TopPartProps {
  isDelivery: boolean;
  setIsDelivery: React.Dispatch<React.SetStateAction<boolean>>;
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

const TopPart: React.FC<TopPartProps> = ({ isDelivery, setIsDelivery, cart, setCart }) => {
  const [location, setLocation] = useState<string>("Getting location...");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            if (data.address) {
              const city = data.address.city || data.address.town || data.address.village || "Unknown City";
              const country = data.address.country || "Unknown Country";
              setLocation(`${city}, ${country}`);
            } else {
              setLocation("Location not found");
            }
          } catch {
            setLocation("Error retrieving location");
          }
        },
        () => setLocation("Location unavailable")
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const updateQuantity = (itemName: string, restaurantName: string, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.itemName === itemName && item.restaurantName === restaurantName
            ? { ...item, quantity: (item.quantity || 1) + change }
            : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };
  

  const cartWithQuantity = cart.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));

  const subtotal = cartWithQuantity.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  const groupedCart: Record<string, { itemName: string; quantity: number; price: string }[]> = 
  cartWithQuantity.reduce((acc, item) => {
    if (!acc[item.restaurantName]) {
      acc[item.restaurantName] = [];
    }
    acc[item.restaurantName].push(item);
    return acc;
  }, {} as Record<string, { itemName: string; quantity: number; price: string }[]>);

  

  const deliveryFee =
    isDelivery && cart.length > 0
      ? cart[0]?.deliveryMoney === "Free"
        ? 0
        : parseFloat(cart[0]?.deliveryMoney?.replace("$", "") || "0")
      : 0;

  const total = subtotal + deliveryFee;

  

  return (
    <div className="TopPartContainer">
      <img src="/public/Foodie Go.svg" alt="Foodie Go Logo" />
      <div className="MidPart">
        <OrderSwitch isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
        <div>
          <img src="/public/ph_map-pin-fill.svg" alt="Location Icon" />
          {location}
        </div>
      </div>

      <div className="LogContainer">
  <div className="CartContainer" ref={dropdownRef}>
    <div onClick={() => setDropdownOpen((prev) => !prev)} className="cart-icon">
      <img className="ShoppingCart" src="/public/shopping-cart-icon.svg" alt="Shopping Cart Icon" />
      <span className="CartCount">{cart.length}</span>
    </div>

    {isDropdownOpen && (
      <div className="cart-dropdown">
        <div className="cart-header">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <img src="/public/shopping-cart-icon.svg" alt="Empty Cart Icon" />
              <h3>Your cart is empty</h3>
              <p>Add items from a restaurant or store to start a new cart.</p>
              <button className="start-shopping-button"
                style={{ backgroundColor: "#0FA958", color: "white", width: "320px", border: "none", padding: "8px", borderRadius: "28px" }}
                onClick={() => setDropdownOpen(false)}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              {Object.entries(groupedCart).map(([restaurantName, items], groupIndex) => (
  <div key={restaurantName} className="cart-restaurant-group">
    {groupIndex !== 0 && <hr className="restaurant-divider" />}
    <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>{restaurantName}</h4>

    {items.map((item, index) => (
      <div key={index} className="cart-item">
        
        <div className="cart-item-details">
          <div className="cart-item-info">
            <span className="cart-item-name">{item.itemName}</span>
            <span className="cart-item-price">{item.price}</span>
          </div>
          <div className="quantity-controls">
            <button className="quantity-button" onClick={() => updateQuantity(item.itemName, restaurantName, -1)}>−</button>
            <span className="cart-item-quantity">{item.quantity}</span>
            <button className="quantity-button" onClick={() => updateQuantity(item.itemName, restaurantName, 1)}>+</button>
          </div>
        </div>
        {index !== items.length - 1 && <hr className="item-divider" />}
      </div>
    ))}
  </div>
))}
<br />
<br />
<div className="cart-summary">
  <div className="cart-summary-row">
    <span>Subtotal:</span>  
    <span>${subtotal.toFixed(2)}</span>
  </div>
  <div className="cart-summary-row">
    <span>Delivery Fee:</span>
    <span>{deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}</span>
  </div>
  <div className="cart-summary-row total">
    <span>Total:</span>
    <span>${total.toFixed(2)}</span>
  </div>
</div>

<br />

<button className="checkout-button"
  style={{ backgroundColor: "#0FA958", color: "white", width: "320px", border: "none", padding: "8px", borderRadius: "28px", cursor: "pointer" }}
  onClick={() => setDropdownOpen(false)}
>
  Go to Checkout
</button>

            </>
          )}
        </div>
      </div>
    )}
  </div>

  <div className="SignIn">Sign in</div>
  <div className="CreateAccount">Create Account</div>
</div>

    </div>
  );
};

export default TopPart;