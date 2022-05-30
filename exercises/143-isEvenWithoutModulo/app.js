function isEvenWithoutModulo(num) {
    // your code here
// your code here
    //Dividendo = Divisor * cociente + resto
    //resto = dividendo - (divisor*cociente)
    var dividendo = num;
    var divisor = 2;
    var resto;
    if(dividendo == 0) {
        return true;
      }
    var cociente = Math.floor(num/2);
    resto = (dividendo - (divisor*cociente));  
    if (resto != 0){
        return false
    }
    else{
        return true
    }
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true