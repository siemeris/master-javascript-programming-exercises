var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};
//KEY : Value(Object(key: value))

function greetCustomer(firstName) {
  var greeting = '';

  for (var keys in customerData){
    //console.log(customerData[keys]); //{ visits: 1 } { visits: 2 }
    for(var value in customerData[keys]){ // da el numero de visitas
      //console.log(customerData[keys][value]);
  }

  if (!(firstName in customerData)){
    greeting = 'Welcome! Is this your first time?';
  }
  else if (keys === firstName && customerData[keys][value] === 1){
    greeting = "Welcome back, "+ firstName +"! We're glad you liked us the first time!";
  }
  else if (keys === firstName && customerData[keys][value] >1){
    greeting = "Welcome back, "+ firstName +"! So glad to see you again!"
  }
}
  return greeting;
}
//var output = greetCustomer('Terrance');
//console.log(output);

var output = greetCustomer('Joe');
console.log(output);

//var output = greetCustomer('Carol');
//console.log(output); 
