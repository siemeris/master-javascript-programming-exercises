
var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    var sum=0;
    if (typeof obj[key] === "undefined" || !Array.isArray(obj[key])){
        return 0
    }
    for (var i=0; i<obj[key].length; i++){
        sum += obj[key][i];
    }
return sum
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13