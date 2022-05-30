function detectOutlierValue(string) {
    // your code here
    arr = string.split(" ")
    var counterPar=0;
    var counterImpar=0;
    var indexPar=0;
    var indexImpar=0;
    for (i=0; i<arr.length; i++){
        if (arr[i]%2==0){
            counterPar += 1;
            indexPar = i;
        }
        else{
            counterImpar += 1;
            indexImpar= i;
        }
    }
    if (counterPar < counterImpar){
        return indexPar+1
    }
    else{
        return indexImpar+1
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2