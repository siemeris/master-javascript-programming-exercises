function sumDigits(num) {
    // your code here
    var contador=0;
    var str = num.toString();
    if (str[0]==='-'){
        contador -= Number(str[1]);
        for (var i=2; i<str.length; i++){
            contador += Number(str[i]);
        }
    }
    else {
        for (var i=0; i<str.length; i++){
            contador += Number(str[i]);
    }
    }
return contador
}
var output = sumDigits(316);
console.log(output); // --> 10