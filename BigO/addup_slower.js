

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}
// check the timing for the code to process the above logic
let t1 = performance.now(); //before
addUpTo(1000000000);
let t2 = performance.now(); //after

console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds.`);

// console.log(addUpTo(15));

// Optimized Code
// better readability
// memory
function addupto(n) {
  return (n * (n + 1)) / 2;
}

let t3 = performance.now(); //before
addupto(1000000000);
let t4 = performance.now(); //after

console.log(`Time Elapsed : ${(t4 - t3) / 1000} seconds.`);
// console.log(addupto(15));
