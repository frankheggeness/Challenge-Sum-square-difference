/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;

  this.sumOfSquares = function () {
    let currentNum = 1;
    let sum = 0;
    while (currentNum <= this.naturalNumbers) {
      sum += Math.pow(currentNum, 2);
      currentNum++;
    }
    return sum;
  }

  this.squareOfTheSums = function () {
    let currentNum = 1;
    let sum = 0;
    while (currentNum <= this.naturalNumbers) {
      sum += currentNum;
      currentNum++;
    }
    return Math.pow(sum, 2);
  }
}
