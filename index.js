// Add your functions here
function map(array,aFunction){
   return  array.map(aFunction)
}

function reduce(array,aFunction,startingPoint){
    if (startingPoint){
        return array.reduce(aFunction,startingPoint)
    }
    else {
        return array.reduce(aFunction)
    }
}