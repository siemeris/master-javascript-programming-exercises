function isPersonOldEnoughToDrink(person) {
  // tu codigo aqui
  if (person.age>=21){
    return true;
  }
  else {
    return false;
  }
}
var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrink(obj);
console.log(output);