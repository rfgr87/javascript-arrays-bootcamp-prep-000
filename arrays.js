var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitka", "skittles"];

function addElementToBeginningOfArray(array, x){
  array.unshift(x)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, x){
  array = array.unshift(x)
  return array.values()
}

//n = ["a","b","c"]
//console.log(addElementToBeginningOfArray([1,2,3,4], 'foo'))

console.log(destructivelyAddElementToBeginningOfArray(["k","g","f"], "hello"))
