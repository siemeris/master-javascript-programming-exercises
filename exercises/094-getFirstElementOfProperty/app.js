// Write your function here
function getFirstElementOfProperty(obj,key){
    for (var key in obj){
        if (typeof obj[key] === "undefined" || !Array.isArray(obj[key])){
            return "undefined"
        }
        else {
        return obj[key][0]
        }   
    }
}
var obj = {
    key: [1, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1