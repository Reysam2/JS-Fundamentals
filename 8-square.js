let args = process.argv.slice(2);
let num = Math.floor(args[0]);
let sym = "X";

if (!isNaN(num)) {
  Array.from({ length: num }).forEach((a, b) => {
    console.log(sym.repeat(num));
  });
} else {
  console.log("Missing size");
}
