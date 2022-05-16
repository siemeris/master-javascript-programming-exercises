function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    var len1=word1.length;
    var len2=word2.length;
    var len3=word3.length;

    if (len1<=len2 & len1<=len3){
        return word1
    }
    else if (len2<=len1 & len2<=len3){
        return word2
    }
    else if (len3<=len1 & len3<=len2){
        return word3
    }
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'