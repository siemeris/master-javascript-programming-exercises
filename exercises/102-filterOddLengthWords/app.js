function filterOddLengthWords(words) {
    // your code here
    var arr = [];
    for (i=0; i<words.length; i++){
        if (words[i].length%2!=0){
            arr.push(words[i]);
        }
    }
return arr
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']