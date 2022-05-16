function countNumberOfKeys(obj) {
    // your code here
    var counter = 0;
    for (var key in obj){
        if (obj[key]){
            counter +=1
        }
    }
return counter
}
var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output); // --> 3