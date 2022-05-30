function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 
  text = text.toLowerCase();
  let str = text.split("");
  if (str.length === 0) { 
      return true;
  }
  for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ){
          return false;
      }
  }
  return true;
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false