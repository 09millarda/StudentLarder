const request = require('request');

const KEY = '83285ac8ca3f719668520b347586a016';

module.exports = (req, res, next) => {
  request(`http://food2fork.com/api/search?key=${KEY}&q=${req.params.ingredients}`, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      res.status(501).send();
      return;
    }
    
    let data;

    try {
      data = JSON.parse(body);
    } catch (e) {
      res.status(501).send();
      return;
    }
    res.status(200).json(data).send();
  });
}