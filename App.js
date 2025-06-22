import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Headphones', price: 1200, category: 'Electronics' },
  { id: 2, name: 'T-Shirt', price: 700, category: 'Clothing' },
  { id: 3, name: 'Shoes', price: 1500, category: 'Footwear' }
];

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart([...cart, product]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🛒 SnapKaro</h1>
      <h3>Cart Items: {cart.length} | Total: ₹{total}</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <p>{product.category}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
