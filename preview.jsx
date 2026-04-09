import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
      
      {/* HEADER */}
      <header style={{
        background: "#000",
        color: "#fff",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1>Bases Cards & Comics</h1>
        <div>
          <a href="#shop" style={{ color: "#fff", margin: "0 10px" }}>Shop</a>
          <a href="#events" style={{ color: "#fff", margin: "0 10px" }}>Events</a>
          <a href="#contact" style={{ color: "#fff", margin: "0 10px" }}>Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#fff" }}>
        <h2 style={{ fontSize: "40px" }}>Cards • Comics • Collectibles</h2>
        <p style={{ maxWidth: "600px", margin: "10px auto" }}>
          Your local hub for trading cards, comics, tournaments, and rare finds in Lancaster.
        </p>
        <button style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}>
          Visit Us
        </button>
      </section>

      {/* SHOP */}
      <section id="shop" style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Shop Categories</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {["Comics", "Sports Cards", "TCG", "Collectibles"].map((item) => (
            <div key={item} style={{
              background: "#fff",
              padding: "20px",
              textAlign: "center",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" style={{ padding: "40px 20px", background: "#fff" }}>
        <h2 style={{ textAlign: "center" }}>Upcoming Events</h2>
        <ul style={{ maxWidth: "600px", margin: "20px auto" }}>
          <li>Friday Night Card Battles</li>
          <li>Sports Card Trade Night</li>
          <li>Local TCG Tournaments</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "40px 20px" }}>
        <h2>Visit Us</h2>
        <p>42035 12th St W #106, Lancaster, CA 93534</p>
        <p>(661) 942-1396</p>
        <p>Open Daily • Closes at 8 PM</p>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "15px",
        marginTop: "20px"
      }}>
        <p>© {new Date().getFullYear()} Bases Cards & Comics</p>
      </footer>

    </div>
  );
}