let args = process.argv.slice(2);
let chk = args[0];
let lang = 'C is fun' ;

if (!isNaN(chk)) {
  Array.from({length: chk}).forEach(() => {
    console.log(lang)
  })
}

else {
  console.log("Missing number of occurrences");
}

 