function getAllWords(str) {
    // your code here
    //array=[];
    //var blanco=0;
    //for (i=0; i<str.length-1; i++){
     //   if (str[i]==" "){
       //     array[i] = array.push(str.slice(blanco,i))
         //   var blanco=i;
       // }
        //else if (i=str.length){
         //   array.push(str.slice(blanco,i))
        //}
       // }
    //return array
    if (str === '') {                                           // Checks for empty string
        return [];
    }
    return str.split(' ');                                      // Returns an array using split() method, using an empty space between
}
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
