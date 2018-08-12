const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
  return res.send('<h1>Hello User</h1>');
});



app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
