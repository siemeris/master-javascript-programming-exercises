var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
  var arr=[];
  if(!Array.isArray(obj[key]) || typeof obj[key] === "undefined"){
    arr = [];
    return arr
  }   
  for (i=0; i<obj[key].length; i++){
    if (obj[key][i].length%2==0){
      arr.push(obj[key][i]);
      }
    }
return arr
}
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']