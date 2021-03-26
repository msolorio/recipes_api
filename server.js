const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;
const {
  categoriesRoutes,
  recipesRoutes
} = require('./routes');

// MIDDLEWARE
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// ROUTES
app.use('/categories', categoriesRoutes);
app.use('/recipes', recipesRoutes);

app.get('/', (req, res) => {
  res.send('A response');
});

app.listen(PORT, () => {
  console.log(`Your server is running on PORT: ${PORT}`);
});
