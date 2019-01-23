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
    var n = 10;
    var n1 = Math.pow(n,(digits-1));
    var n2 = Math.pow(n,digits)-1;
    var number = 0;
    for (var i = n1; i <= n2; i++) {
        for (var x = n1; x <= n2; x++) {
            number = i * x;
            let str = number.toString();
            if(str === str.split("").reverse().join("")) {
                if (number > palindromeNumber) {
                    factor_0 = i;
                    factor_1 = x;
                    palindromeNumber = number;
                }
            }
        }
    }
    return {
        factor_0: factor_0,
        factor_1: factor_1,
        palindromeNumber: palindromeNumber
    }
}

