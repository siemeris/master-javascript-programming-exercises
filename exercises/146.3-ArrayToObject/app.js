function transformEmployeeData(array) {
  // your code here
  var data = [];
  //var obj = {}; si se declara aquí no imprime el primer objeto¿?
  for (var i=0; i<array.length; i++){
    var obj = {};
    for (var j=0; j<array[i].length;j++){
      obj[array[i][j][0]]=array[i][j][1];
    }
    data.push(obj);
    }
return data    
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]