"use strict";

var args = process.argv.slice(2);
var fnum = Number(args[0]);
var snum = Number(args[1]);

function add(a, b) {
  return a + b;
}

if (!isNaN(fnum) && !isNaN(snum)) {
  console.log(add(fnum, snum));
} else {
  console.log(NaN);
}