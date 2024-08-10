import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <main>
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="Figures/piston.jpg" alt="Piston" />
            <p>Piston</p>
          </div>
          <div className="product-item">
            <img src="Figures/shaft-output.jpg" alt="Shaft Output" />
            <p>Shaft Output</p>
          </div>
          {/* <!-- Add more products as needed --> */}
        </div>
      </section>
    </main>
  );
}

export default Products;
