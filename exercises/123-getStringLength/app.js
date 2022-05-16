function getStringLength(string) {
    // your code here
  // see how many substrings > 0 can be built
  // log that number & return
  var subString = string.slice();
  var counter = 0;

  while (subString !== '') {
    counter++;
    subString = subString.slice(1);
  }

  return counter;
}

var output = getStringLength('hello');
console.log(output); // --> 5