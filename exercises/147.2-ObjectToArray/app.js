function listAllValues(obj) {
  // your code here
  var array=[]; //tiene que estar aquí declarado, si se declara dentro del for sólo devuelve un resultado
  for (var key in obj){
    array.push(obj[key]);
  }
  return array
}
let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output); // ['Krysten', 33, false]