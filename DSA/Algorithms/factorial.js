function getFactorial(n) {
  let fact = n;
  for (let i = n; i > 1; i--) {
    fact = fact * (i - 1);
  }
  console.log(fact);
}

getFactorial(5)
