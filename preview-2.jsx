import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: "Rare Card #1", price: 49.99 },
    { id: 2, name: "Rare Card #2", price: 59.99 },
    { id: 3, name: "Comic Issue #27", price: 19.99 },
    { id: 4, name: "Collector Pack", price: 29.99 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <header style={header}>
        <h1>BASES</h1>

        <input
          placeholder="Search..."
          style={searchBar}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setShowCart(true)} style={cartBtn}>
          Cart ({cart.length})
        </button>
      </header>

      {/* HERO */}
      <section style={hero}>
        <h2 style={{ fontSize: "48px" }}>COLLECT DIFFERENT</h2>
        <p style={{ color: "#aaa" }}>Cards. Comics. Culture.</p>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "40px" }}>
        <h2>🔥 Trending</h2>

        <div style={grid}>
          {filteredProducts.map((p) => (
            <div key={p.id} style={card}>
              <img
                src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h3>{p.name}</h3>
              <p style={{ color: "#aaa" }}>${p.price}</p>

              <button onClick={() => addToCart(p)} style={btn}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CART DRAWER */}
      {showCart && (
        <div style={cartDrawer}>
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>No items yet</p>
          ) : (
            cart.map((item, i) => (
              <div key={i} style={{ marginBottom: "10px" }}>
                {item.name} - ${item.price}
              </div>
            ))
          )}

          <button onClick={() => setShowCart(false)} style={btn}>
            Close
          </button>
        </div>
      )}

      {/* FOOTER */}
      <footer style={footer}>
        <p>© {new Date().getFullYear()} Bases Cards & Comics</p>
      </footer>
    </div>
  );
}

/* STYLES */

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  borderBottom: "1px solid #222"
};

const hero = {
  textAlign: "center",
  padding: "60px 20px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px"
};

const card = {
  background: "#1a1a1a",
  padding: "15px",
  borderRadius: "15px"
};

const btn = {
  marginTop: "10px",
  padding: "10px",
  width: "100%",
  background: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer"
};

const cartBtn = {
  background: "#fff",
  color: "#000",
  padding: "8px 12px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer"
};

const searchBar = {
  padding: "8px",
  borderRadius: "8px",
  border: "none"
};

const cartDrawer = {
  position: "fixed",
  right: 0,
  top: 0,
  width: "300px",
  height: "100%",
  background: "#111",
  padding: "20px",
  boxShadow: "-2px 0 10px rgba(0,0,0,0.5)"
};

const footer = {
  textAlign: "center",
  padding: "20px",
  borderTop: "1px solid #222",
  marginTop: "40px"
};