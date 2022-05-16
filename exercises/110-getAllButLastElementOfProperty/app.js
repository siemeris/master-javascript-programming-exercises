var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
  var arr = [];
  if (!Array.isArray(obj[key] || typeof obj[key] === "undefined") || obj[key].length === 0){
    return []
  }
  for (var i=0; i<obj[key].length-1; i++){
    arr.push(obj.key[i]);  
  }
  return arr
  }

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]