function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  var finalAmount;
  finalAmount = principal * ((1 + (interestRate/compoundingFrequency))**(compoundingFrequency*timeInYears))
  var CI = finalAmount-principal; 
  return CI
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543