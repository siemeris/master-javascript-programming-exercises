var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    var total = 1;
    if (!Array.isArray(obj[key]) || typeof obj[key] === "undefined" || obj[key].length<1){
      return 0
    }
    for (var i=0; i<obj[key].length; i++){
      total *= obj[key][i];
    }
  return total
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24