function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name);