// Write your function here
function isEvenLength(word){
    if(word.length%2!==0){
        return false;
    }
    else{
        return true;
    }
}
var output = isEvenLength('wow');
console.log(output);