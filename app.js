const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App listening on port http://localhost:3000');  
});