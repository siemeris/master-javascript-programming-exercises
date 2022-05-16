function isPersonOldEnoughToDrive(person) {
  // tu codigo aqui
  if (person.age >=16){
    return true;
  }
  else{
    return false;
  }
}
var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output);