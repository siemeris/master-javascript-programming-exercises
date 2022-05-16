function repeatString(string, num) {
    // your code here
    var str='';
    for (var i=1; i<=num; i++){
        str += string;
    }
return str
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'