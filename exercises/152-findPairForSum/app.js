function findPairForSum(array, number){
    var arr = [];
    for (i=0; i<array.length; i++){
        for(j=i+1; j<array.length; j++){
            if( array[i]+array[j] == number){
                arr.push(array[i],array[j]);
                return arr
            }
        }
    }
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]