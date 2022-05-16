function removeFromFrontOfNew(arr) {
    // your code here
    var copia = arr.slice(1,arr.length);
    return copia

}
var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]