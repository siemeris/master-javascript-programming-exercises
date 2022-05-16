function getAllLetters(str) {
    // your code here
    var array=[];
    for (i=0; i<str.length; i++){
        array.push(str[i]);
    }
    return array
}
var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']