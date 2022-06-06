function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  sentence = sentence.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
  //var sentenceLW = sentence.toLowerCase();
  //console.log(sentenceLW);
  splitSentence = sentence.split(" ");
  //console.log(splitSentence);
  var palindromes = [];
  for (var i=0; i < splitSentence.length; i++){
    if (isPalindrome(splitSentence[i])){
      palindromes.push(splitSentence[i]);
    }
  }

  //Ordenamos la lista de palindromes por su long
  var sortedPalin = palindromes.sort(sortAscendingByLength);
  //Devolvemos la palabra de mayor long
  var palinMayorLong = sortedPalin[sortedPalin.length-1];
  //return palinMayorLong

  //PROBANDO
  let posicion = sentence.indexOf(palinMayorLong);
  //console.log(posicion);
  var strAnt = sentence[posicion-2] + sentence[posicion-1];
  var strPost = sentence[posicion+palinMayorLong.length] + sentence[posicion+palinMayorLong.length+1];
  newStr = strAnt + palinMayorLong + strPost ;
  //console.log(newStr);
  if (isPalindrome(newStr)){
    palindromes.push(newStr);
    var sortedPalin = palindromes.sort(sortAscendingByLength);
    var palinMayorLong = sortedPalin[sortedPalin.length-1];
    //return palinMayorLong
  };
  //FIN PROBANDO

  return palinMayorLong


}
function reverseString(string) {
  return string.split('').reverse().join('');
}
function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  word = word.toLowerCase();
  return (word === reverseString(word)) ? true : false;
}
function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}
let output = findLongestPalindrome("My dad is a racecar athlete"); 
console.log(output); // "a racecar a"

let output2 = findLongestPalindrome("Madam, i m adam"); 
console.log(output2); // "Madam"
