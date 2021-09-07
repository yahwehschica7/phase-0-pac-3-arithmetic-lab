function add(x,y) {
    return x + y 
}
add(4,5)

function subtract(x,y) {
   return x - y
}
subtract(10,8)

function multiply(x,y) {
   return x * y
}
multiply(2,5)

function divide(x,y) {
    return x / y
}
divide(12,3)

function increment(n) {
    n++
    return n  
}
increment(2)

function decrement(n) {
    n--
    return n 
}
decrement(5) 

function makeInt(string) {
    string = parseInt(string, 10)
    return string 
}
makeInt(9.3)

function preserveDecimal(string) {
    string = parseFloat(string)
    return string 
}
preserveDecimal(8.77)
