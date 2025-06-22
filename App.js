import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Phone', price: 15000 },
  { id: 2, name: 'Headphones', price: 2000 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>SnapKaro - Shop Now!</h1>
      <h2>Products:</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price}{' '}
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart:</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
    </div>
  );
}