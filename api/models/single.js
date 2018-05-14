const data = require('../../data.json');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const model = data.models.find(m => m.id === id);

  res.status(200).json({ model });
}