 let arguments = function (a, b) {
  if (arguments.length === 0) {
    console.log("No argument");
  } else if (arguments.length === 1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
}; 
arguments('a', 'l', 'x')
arguments(1)
arguments();