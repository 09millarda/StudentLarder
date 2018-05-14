const app = require('express')();
const api = require('./api');

app.use('/api', api);

app.listen(3000, () => {
  console.log('App listening on port http://localhost:3000');  
});