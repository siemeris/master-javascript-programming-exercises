function flipEveryNChars(input, n) {
    // your code here
// Split the string into an array to traverse the array
    nA = [];
    len = input.length;
    separarCadena = input.split("");
    //nA[0] = separarCadena.slice(0,5).reverse().join("");
    //nA[1] = separarCadena.slice(5,10).reverse().join("");
    //nA[2] = separarCadena.slice(10,15).reverse().join("");
    //console.log(nA);
    //unirArr = nA.join("");
    //console.log(unirArr);
    //return unirArr
    for (var i = 0; i < len/n; i++){
      if (i==0){
        nA[i] = separarCadena.slice(0,n).reverse().join("");
      }
      else {
        nA[i] = separarCadena.slice(i*n,(i+1)*n).reverse().join("");
      }
    }
    unirArr = nA.join("");
    return unirArr
  }

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma