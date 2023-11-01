// index.js

// Function to fetch and display products
async function fetchProducts() {
  try {
      const response = await fetch('/api/products'); // Replace with the actual endpoint
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const products = await response.json();
      const productList = document.getElementById('product-list');

      // Loop through products and display them
      products.forEach((product) => {
          const listItem = document.createElement('li');
          listItem.textContent = `Product: ${product.name}, Price: $${product.price}`;
          productList.appendChild(listItem);
      });
  } catch (error) {
      console.error('Error fetching products:', error);
  }
}

// Call the fetchProducts function when the page loads
window.addEventListener('load', fetchProducts);
n