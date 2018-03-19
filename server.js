const express = require('express');
const app = express();

const PORT = process.env.PORT || 4200;


app.use(express.static('public'));


app.listen(PORT, () => {
  console.log('server listening')
})