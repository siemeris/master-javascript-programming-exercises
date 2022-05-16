var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    var arr = [];
    if (typeof obj[key] === "undefined"){
      arr = [];
      return arr
    }
    for (i=0; i<obj[key].length; i++){
      arr.push(obj[key][i]**2);
    }
  return arr
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]