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
      let squareOfCurrentNum = Math.pow(currentNum, 2);
      sum += squareOfCurrentNum;
      currentNum++;
    }
    return sum;
  }

  this.squareOfTheSums = function () {
    let currentNum = 1;
    let sum = 0;
    while (currentNum <= this.naturalNumbers) {
      sum += currentNum;
      currentNum++
    }
    let squaredSum = Math.pow(sum, 2);
    return squaredSum;
  }
}

// do work here

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()


