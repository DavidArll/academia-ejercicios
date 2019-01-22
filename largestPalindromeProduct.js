/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
    var factor_0 = 0;
    var factor_1 = 0;
    var palindromeNumber = 0;

    // do your work here
    if (digits == 2) {
        var number = 0;
        for (let i = 10; i <= 99; i++) {
            number = i;
            if (Math.floor(number / 10) === number % 10) {
                palindromeNumber = number;
            }
        }
    }
}
return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
};
};
