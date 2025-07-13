let arguments = function (a, b) {
  switch (arguments.length) {
    case 0:
      console.log("No argument");
      break;

    case 1:
      console.log("Argument found");
      break;

    default:
      console.log("Arguments found");
  }
};
console.log(arguments(1, 2));
