var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (obj[key] === null || typeof obj[key] === "undefined"){
        return undefined
    }
    return obj[key][index]
}
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
