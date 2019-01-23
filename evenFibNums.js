/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue ) {
  var sum = 0;
  let fibs = [1,2]; 

  if(number<=2) {
   return fibs[1]
   };
 
   let j= 2;
   let sum = fibs[1];
   while(j<number) {
   
   let nextFib = fibs[j-1] + fibs[j-2];
   sum = nextFib%2==0? sum+nextFib: sum;
   j++;
   }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};