// Write your function here
function countAllCharacters(str){
    cont = {};
    for(var i=0; i<str.length; i++){
        if (typeof(cont[str[i]]) === "undefined"){
            cont[str[i]] = 1;
        }
        else{
        cont[str[i]]+=1;
        }
    }
return cont
}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}