import { useState } from "react";
import products from "../data/Products";

function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div style={{ padding: "40px", background: "#0f0f0f", minHeight: "100vh" }}>
      <h2 style={{
        textAlign: "center",
        color: "white",
        fontSize: "32px",
        marginBottom: "40px"
      }}>
        ✨ Explore Fashion ✨
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px",
        marginTop:"40px"
      }}>
        {products.map((item) => (
          <div key={item.id} style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "20px",
            textAlign: "center",
            color: "white",
            transition: "0.3s",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
          }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />
            <h3 style={{ marginTop: "15px" }}>{item.name}</h3>
            <p style={{ color: "#ff4da6", fontWeight: "bold" }}>
              ₹{item.price}
            </p>

            <button
              onClick={() => addToCart(item)}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "30px",
                background: "linear-gradient(45deg,#ff4da6,#ff66cc)",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>

      <h3 style={{ color: "white", marginTop: "40px", textAlign: "center" }}>
        🛍 Cart Items: {cart.length}
      </h3>
    </div>
  );
}

export default Products;