function average(array_of_numbers) {
  // process array of numbers
  len= array_of_numbers.length;
  return sum(array_of_numbers)/len
}

function sum(numbers) {
  var resultado=0;
  for (i=0; i<numbers.length; i++){
    resultado += numbers[i];
  }
  return resultado
}

console.log(average([2,3]))