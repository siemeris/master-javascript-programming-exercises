var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (var key in obj2){
        if (obj1[key]){
            obj1[key];
        }
        else{
            obj1[key] = obj2[key];
        }
    }
    return obj1
}
extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}