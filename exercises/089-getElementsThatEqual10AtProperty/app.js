// Write your function here
function getElementsThatEqual10AtProperty(obj,key){
    var newArray = [];
    for (var key in obj){
        for (var i=0; i<obj[key].length; i++){
            if (obj[key][i] == 10){
                newArray.push(10); 
            }
        }
    }
return newArray
}

var obj = {
    key: [1000, 10, 50, 10]
  };
  var output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]