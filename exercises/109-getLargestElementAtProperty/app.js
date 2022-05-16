var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    var cont = 0;
    var arr = [];
    if (!Array.isArray(obj[key]) || typeof obj[key] === "undefined" || obj[key].length === 0){
      arr = [];
      return arr
    }
    for (var i=0; i<obj[key].length; i++){
      if (obj[key][i]>cont){
        cont = obj[key][i];
      }
    }
  return cont
}
var output = getLargestElementAtProperty(obj,'key');
console.log(output); // --> 4