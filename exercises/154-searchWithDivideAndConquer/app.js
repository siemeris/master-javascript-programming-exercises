function search(array, value) {
  var indIni = 0;
  var indFin = array.length-1; 
  var indMedio = indIni + (indFin - indIni) / 2;

  // your code here
  if (value > array[indFin] || value < array [indIni]) {
    return null
  }
  while (indIni <= indFin) {
      if (array[indMedio] == value){
        return indMedio
      }
      else if (array[indMedio]<value){
        indFin = array.length-1;
        indIni = indMedio+1;
        indMedio = indIni + Math.floor(((indFin - indIni)) / 2);
      }
      else if (array[indMedio]>value){
        indFin = indMedio-1;
        indMedio = indIni + Math.floor(((indFin - indIni)) / 2);
      }
      }
}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 1)); // => 4
