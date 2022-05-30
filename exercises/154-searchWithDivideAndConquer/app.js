function search(array, value) {
  var indIni = 0;
  var indFin = array.length; 
  var m = indIni + (indFin - indIni) / 2;
  // your code here
  while (indIni <= indFin) {
    m = indIni + (indFin - indIni) / 2;

      if (array[m] == value){
        return array[m]
      }
      else if (array[m] <value){
        
      }
      else if (array[m] >value){
        
      }
      else if (value < array[Math.floor(array.length/2)]){
        newArray = array.slice(0, value);
        search(newArray,value);
      }
  }
}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4