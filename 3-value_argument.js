let args = process.argv.slice(2);
let count = args.reduce((a) => a + 1, 0);
if(count > 0) {
  console.log(`${args}`);
}
else {
  console.log('No argument')
}
