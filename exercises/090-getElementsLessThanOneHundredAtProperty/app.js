// Write your function here
function getElementsLessThan100AtProperty(obj,key){
    var newArray = [];
    for (var key in obj){
        for (var i=0; i<obj[key].length; i++){
            if (obj[key][i] < 100){
                newArray.push(obj[key][i]); 
            }
        }
    }
return newArray
}    
var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
