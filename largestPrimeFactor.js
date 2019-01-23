exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here
  var factors = [];
  
  for (i = 0; i < n; i++) { 
    if (n % i === 0) { 
      factors.push(i); 
    }
  }
  for (i = 0; i < factors.length -1; i++) { 
    if (factors[factors.length -1] % factors[i] === 0) { 
      factors.pop(); 
      i = 0; 
    }
  }
  return primeNumber;
};