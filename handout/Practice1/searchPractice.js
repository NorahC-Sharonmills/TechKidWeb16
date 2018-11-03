'use strict'

function search(input, target) {
  var i = 0;
  var ireturn = -1;
  if(input != null)
  {
    input.forEach(element => {
      if(element == target){
        console.log(i);
        ireturn = i;
      }
      i++;
    });
  }
  console.log(ireturn);
  console.log(input.indexOf(target));
  
  return  ireturn  // Remove this line and change to your own algorithm
}

module.exports = search
