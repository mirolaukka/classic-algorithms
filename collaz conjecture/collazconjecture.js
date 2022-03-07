//Explanitation of the algorithm
// "Start with a number n > 1. Find the number of steps it takes to reach one using the following process: If n is even, divide it by 2. If n is odd, multiply it by 3 and add 1"

let n = 7;

let count = 0;

while(n>1){
  if(n%2 == 0){
    n = n/2;
  }else{
    n = n*3+1
  }
  count++
}

console.log('Count is: ' + count)