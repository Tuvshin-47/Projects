import React from "react";

interface OrderSwitchProps {
  isDelivery: boolean;
  setIsDelivery: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderSwitch: React.FC<OrderSwitchProps> = ({ isDelivery, setIsDelivery }) => {
  return (
    <div
      className="switch-container"
      onClick={() => setIsDelivery(!isDelivery)}
      style={{
        fontSize: "18px",
        gap:"8px"
      }}
    >
      <div className={`slider ${isDelivery ? "right" : "left"}`} style={{ width: "49%", height: "80%", }}></div>

      <span className={`option ${!isDelivery ? "active" : ""}`} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <img
          src="/pickup-icon.svg"
          style={{
            width: "24px",
            height: "28px",
            filter: !isDelivery ? "brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(2000%) hue-rotate(120deg)" : "none",
          }}
        />
        Pickup
      </span>

      <span className={`option ${isDelivery ? "active" : ""}`} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <img
          src="/delivery-icon.svg"
          style={{
            width: "24px",
            height: "28px",
            filter: isDelivery ? "brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(2000%) hue-rotate(120deg)" : "none",
          }}
        />
        Delivery
      </span>
    </div>
  );
};

export default OrderSwitch;
