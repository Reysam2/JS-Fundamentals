let args = process.argv.slice(2);
let num = Number(args[0]);

function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(num));
