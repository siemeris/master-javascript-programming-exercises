var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    var arr = [];
    if (typeof obj[key]==="undefined"){
      arr = [];
      return arr
    }
    for (i=0; i<obj[key].length; i++){
      if (obj[key][i]%2!=0){
        arr.push(obj[key][i]);
      }
    }
  return arr
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]