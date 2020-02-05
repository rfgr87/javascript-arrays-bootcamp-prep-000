var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitka", "skittles"];

function addElementToBeginningOfArray(array, x){
  out = array.unshift(x)
  return out.values()
}

function destructivelyAddElementToBeginningOfArray(array, x){
  array = array.unshift(x)
  return array.values()
}

n = [1,2,3,4]
console.log(n.unshift('boo'))

//console.log(addElementToBeginningOfArray(n, 'foo'))
