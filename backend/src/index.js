require('dotenv').config();
const express = require('express');
const app = express()

app.use(express.json())

const orderRoutes = require('./routes/order');
const errorHandler = require('./middlewares/errorHandler');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use('/', orderRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`)
})