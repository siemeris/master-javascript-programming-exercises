// Write your function here
function getLastElementOfProperty(obj,key){
    last = obj[key].length-1;
    for (var key in obj){
        if (typeof obj[key] === "undefined" || !Array.isArray(obj[key])){
            return "undefined"
        }
        else {
        return obj[key][last]
        }   
    }
}
var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5