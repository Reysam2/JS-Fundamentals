let args = process.argv.slice(2);
let count = args.reduce((con) => con + 1, 0);
if(count > 0) {
  console.log(`${args.shift()}`);
}
else {
  console.log('No argument')
}