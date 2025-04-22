const express  = require('express');

const restaurantsRouter = require('./routes/restarurants');

const app = express();

//Routes
app.use('/apis/restaurants', restaurantsRouter);

app.get('/', (req , res) => {
  res.send('<h1>Hello BAS<h1>');
});

app.listen(3000, () => {
        console.log('listening to port 3000');
} );