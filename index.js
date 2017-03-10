const express = require('express');
const { resolve } = require('path');

const app = express();

app.use('/', express.static(resolve(__dirname, 'dist')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
