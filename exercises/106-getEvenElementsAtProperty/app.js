
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    var arr = [];
    if (typeof obj[key] === "undefined"){
      return arr
    }
    for (i=0; i<obj[key].length;i++){
      if (obj[key][i]%2==0){
        arr.push(obj[key][i])
      }
    }
return arr
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]