function isRotated(str1, str2) {
    // your code here
        // There lengths must be same and str2 must be
        // a substring of str1 concatenated with str1. 
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
//The indexOf() method returns -1 if the value is not found. 
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false