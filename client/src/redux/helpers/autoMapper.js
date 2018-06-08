/**
 * @param {object} from - An instance of the class you want to map from 
 * @param {object} to - The class you want to map to
 * @param {boolean} err - Throw an error when a property from "to" cannot be found in "from". Defaults to true. 
 */
module.exports = (from, to, err = true) => {
  const toInstance = new to();

  const toProps = Reflect.ownKeys(toInstance);

  for (let i = 0; i < toProps.length; i++) {
    const key = toProps[i];

    if (Reflect.has(from, key)) {
      toInstance[key] = Reflect.get(from, key);
    } else {
      if (err) {
        throw new Error(`Property "${key}" in class "${to.name}" does not exist in class "${from.constructor.name}".`);
      }      
    }
  }

  return toInstance;
}