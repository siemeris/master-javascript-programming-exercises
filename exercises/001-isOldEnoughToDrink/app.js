function isOldEnoughToDrink(age){
    if (age >= 21) {
        return true;
    }
    else{
        return false;
    }	
}
var output = isOldEnoughToDrink(17);
console.log(output);