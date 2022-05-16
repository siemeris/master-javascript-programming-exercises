function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    var tax= preTaxAndTipAmount * 9.5/100;
    var tip= preTaxAndTipAmount * 15/100;
    var total = preTaxAndTipAmount + tax + tip;
    return total
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9