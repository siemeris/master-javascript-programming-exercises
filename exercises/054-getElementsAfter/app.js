function getElementsAfter(array, n) {
  // your code here
  newArray = array.slice(n+1,array.length);
  return newArray
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']