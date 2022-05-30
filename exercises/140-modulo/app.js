function modulo(num1, num2) {
    // your code here
    //Dividendo = Divisor * cociente + resto
    //resto = dividendo - (divisor*cociente)
    var dividendo = num1;
    var divisor = num2;
    var resto;
    if (num1>0){
        var cociente = Math.floor(num1/num2);
    }
    else{
        var cociente = Math.floor(num1/num2)+1;
    }  
    resto = (dividendo - (divisor*cociente));  
    return resto
}

var output = modulo(-25, 2);
console.log(output); // --> 1