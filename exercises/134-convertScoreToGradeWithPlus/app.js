function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (score>100 || score <0){
        return "INVALID SCORE"
    } else if (score >= 98 && score <= 100) {
        return 'A+';
      } else if (score >= 93 && score <= 97) {
        return 'A';
      } else if (score >= 90 && score <= 92) {
        return 'A-';
      } else if (score >= 88 && score <= 89) {
        return 'B+';
      } else if (score >= 83 && score <= 87) {
        return 'B';
      } else if (score >= 80 && score <= 82) {
        return 'B-';
      } else if (score >= 78 && score <= 79) {
        return 'C+';
      } else if (score >= 73 && score <= 77) {
        return 'C';
      } else if (score >= 70 && score <= 72) {
        return 'C-';
      } else if (score >= 68 && score <= 69) {
        return 'D+';
      } else if (score >= 63 && score <= 67) {
        return 'D';
      } else if (score >= 60 && score <= 62) {
        return 'D-';
      } else {
        return 'F';
      }
    }

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'