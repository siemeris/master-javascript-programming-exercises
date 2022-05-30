function isOddWithoutModulo(num) {
    // your code here
// your code here
    //Dividendo = Divisor * cociente + resto
    //resto = dividendo - (divisor*cociente)
    var dividendo = num;
    var divisor = 2;
    var resto;
    if(dividendo == 0) {
        return false;
      }
    var cociente = Math.floor(num/2);
    resto = (dividendo - (divisor*cociente));  
    if (resto != 0){
        return true
    }
    else{
        return false
    }
}

var output = isOddWithoutModulo(-17);
console.log(output); // --> true