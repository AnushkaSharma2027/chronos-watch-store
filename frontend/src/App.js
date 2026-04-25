import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">⌚ CHRONOS</h1>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/products">Watches</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Luxury Watches</h1>
          <p>Discover timeless elegance</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h2>Why Choose CHRONOS?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🏆 Premium Quality</h3>
              <p>Handpicked luxury watches from top brands</p>
            </div>
            <div className="feature-card">
              <h3>🚚 Fast Delivery</h3>
              <p>Free shipping on all orders</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Secure Payment</h3>
              <p>100% safe and encrypted transactions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

