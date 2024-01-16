function getFibonacci(n) {
  const arr = [];
  for (i = 0; i < n; i++) {
    if (i > 1) {
      arr.push(arr[i - 1] + arr[i - 2]);
    } else arr.push(i);
  }
  console.log(arr);
}

getFibonacci(7);
