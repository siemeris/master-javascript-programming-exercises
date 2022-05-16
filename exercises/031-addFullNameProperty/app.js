function addFullNameProperty(obj) {
  // tu codigo aqui
  obj.fullName= person.firstName + " " + person.lastName;
  return obj
}
var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName);