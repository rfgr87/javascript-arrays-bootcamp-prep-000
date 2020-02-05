var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitka", "skittles"];

function addElementToBeginningOfArray(array, x){
  array = array.unshift(x)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, x){
  array.unshift(x)
  return array
}


//console.log(addElementToBeginningOfArray([1], 'foo'))

//console.log(destructivelyAddElementToBeginningOfArray(["k","g","f"], "hello"))

function addElementToEndOfArray(array, element){
  var n = array;
  n.push(element)
  return n
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accesElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var array2 = array
  array2 = array2.slice(1)
  return array2
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var array2 = array.slice(0, array.length - 1)
  return array2
}