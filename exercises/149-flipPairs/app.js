function flipPairs(input){
    // your code here
    var str = '';
    var j=1;
    for (var i =0; i<input.length; i=i+2){
        if (j<input.length){ // el valor de j debe estar dentro de la longitud de la cadena
        str += input[j] + input[i]; 
        j +=2;
        }
        else{ //para el último caracter j ya no tiene valor
            str += input[i];
        }
    }
    return str
}


var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
