// Write your function here
function getNthElementOfProperty(obj,key,num){
    for (var key in obj){
        if (typeof obj[key] === "undefined" || !Array.isArray(obj[key])){
            return "undefined"
        }
        for(i=0; i<obj[key].length;i++){
            if (i=num){
                return obj[key][i]
            }
        } 
    }  
}
var obj = {
    key: [1, 2, 6]
  };
  var output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2