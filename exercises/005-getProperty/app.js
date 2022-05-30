function getProperty(obj, key) {
  var o = obj[key];
  return  o;
  // For dynamic attribute names you need to use the bracket [] notation instead of the dot notation:
};
var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output);
