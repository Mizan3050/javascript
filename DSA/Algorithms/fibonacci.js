
function getFibonacci(n){
  const arr = [];
  for(i = 0; i<n; i++){
    if(i<2){
      arr.push(i)
    } else {
      arr.push(arr[i-1]+arr[i-2])
    }
  }
  console.log(arr);
}

getFibonacci(7)