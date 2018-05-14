const data = require('../../data.json');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const car = data.cars.find(m => m.id === id);

  res.status(200).json({ car });
}