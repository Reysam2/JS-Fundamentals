let args = process.argv.slice(2); 
let chk = args[0];

if (!isNaN(chk)) {
  console.log(`My number: ${Math.floor(chk)}`);
} else {
  console.log(`Not a number`);
}