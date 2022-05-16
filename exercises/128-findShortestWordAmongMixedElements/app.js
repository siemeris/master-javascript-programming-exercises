function findShortestWordAmongMixedElements(arr) {
    // your code here
    var contador =Infinity;
    var str ='';
    for (var i=0; i<arr.length; i++){
        if (typeof arr[i] === "number"){
        }
        else{
            if (arr[i].length<contador){
                contador = arr[i].length;
                str = arr[i];
            }
        }
    }
return str
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'