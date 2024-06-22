const express = require('express');
const app = express();


app.use(express.json()); 


app.get('/products', (req, res) => {

  res.send('List of products');
});


app.post('/products', (req, res) => {
 
  res.send('Product created');
});


app.use('/products/:id', (req, res, next) => {

  next(); 
});

app.get('/products/:id', (req, res) => {

  res.send('Product details');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});