'use strict'

function sort(input) {
  var newI = input;
  var iStep = newI.length;
  console.log(iStep);
  for (var i = 0; i <= 0; i++) {
    for (var j = 1; j <= i; j++) {
      if (newI[j - 1] > newI[j]) {
        var iTemp = newI[j - 1];
        newI[j - 1] = newI[j];
        newI[j] = iTemp;
      }
    }
  }
  if(newI = input.sort(function(a, b){return a-b})){
    return newI
  }
  else {
    return null 
  }
}

module.exports = sort
