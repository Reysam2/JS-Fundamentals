let args = process.argv.slice(2);

if (args.length === 2) {
  console.log(`${args.slice(0, 1)} is ${args.slice(1, 2)}`);
} else if (args.length === 1) {
  console.log(`${args.slice(0, 1)} is ${undefined}`);
} else {
  console.log(`${undefined} is ${undefined}`);
}