function countCharacter(str, char) {
    // your code here
    var contador=0;
    for (var i=0; i<=str.length; i++){
        if (str[i]==char){
            contador +=1;
        }
        else {
            contador +=0;
        }
    }
    return contador;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3