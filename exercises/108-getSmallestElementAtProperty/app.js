var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    var cont =1000;
    var arr = [];
    if (typeof obj[key] === "undefined" || typeof obj[key] === "number" || !Array.isArray(obj[key]) || obj[key].length === 0 ){
      return arr
    }
    for (var key in obj){
      for (var i=0; i<obj[key].length; i++){
        if (obj[key][i]<cont){
          cont = obj[key][i];
        }
      }
    }
  return cont
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1