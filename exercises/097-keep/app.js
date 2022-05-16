// Write your function here
function keep(arr,disc){
    for (var i=0; i<arr.length; i++){
        if (arr[i] !== disc){
            arr.splice(i,1);
            i--; //cómo el elemento se quita en el mismo array hay que ajustar i
        }
    }
    if (arr.length==0){
        arr = [];
    }
return arr
}
var output = keep([1, 2, 3, 2, 1], 2); 
console.log(output); //--> [2, 2]