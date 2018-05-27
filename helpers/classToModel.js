/**
 * @param {object} _class - The instance of a class with which you want to return the properties in JSON format.
*/
module.exports = _class => {
  const keys = Reflect.ownKeys(_class);

  const model = {};

  for (let i = 0; i < keys.length; i++) {
    model[keys[i]] = Reflect.get(_class, keys[i]);
  }

  return model;
}