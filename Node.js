const express = require('express');
const app = express();

// Middleware (global)
app.use(express.json()); // Parse JSON requests

// Route handler for GET /products
app.get('/products', (req, res) => {
  // Logic to fetch product data from the database
  res.send('List of products');
});

// Route handler for POST /products
app.post('/products', (req, res) => {
  // Logic to create a new product
  res.send('Product created');
});

// Middleware (specific to /products/:id route)
app.use('/products/:id', (req, res, next) => {
  // Validate product ID or perform other checks
  next(); // Pass control to the next middleware or route handler
});

// Route handler for GET /products/:id
app.get('/products/:id', (req, res) => {
  // Logic to fetch a specific product by ID
  res.send('Product details');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});