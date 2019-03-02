

function getFirstSelector(selector) {
  var new1 = document.querySelector(selector);
  return new1;
}

function nestedTarget(){
  var new2 = document.querySelector("#nested .target");
  return new2;
}


function deepestChild(){
  var newArray = document.querySelector("#grand-node").innerHTML;


  function find(array, criteriaFn) {

    let current = array;
    let next = [];

    while (current || current === 0) {

      if (criteriaFn(current)) {
        return current;
      }

      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i]);
        }
      }

      current = next.shift();
    }

    return null;
  }

find(newArray, n => (typeof n === 'string'));

}



function increaseRankBy(n) {

  var x = document.getElementsByClassName("ranked-list");
  for(var i=0; i<x.length; i++){
    var integer = x[i].innerHTML;
    var newNum = parseInt(integer, 10);
    newNum += n;
    x[i].innerHTML = newNum;
  }

}
