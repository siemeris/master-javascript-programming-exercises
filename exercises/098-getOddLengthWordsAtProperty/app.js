// Write your function here
function getOddLengthWordsAtProperty(obj,key){
    var arr=[];
    for (i=0; i<obj[key].length; i++){
        if (obj[key][i].length%2!=0){
            arr.push(obj[key][i]);
        }
    }
    if(obj[key].length == 0 || !Array.isArray(obj[key])){
            arr = [];
        }   
return arr
}
var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']
