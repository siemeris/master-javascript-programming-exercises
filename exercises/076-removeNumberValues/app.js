var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for (var key in obj){
        //if (Number.isInteger(obj[key])){
        if (typeof obj[key] === 'number'){
            delete obj[key];
        } //también valdría con typeof === 'number'
    }
return obj
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }