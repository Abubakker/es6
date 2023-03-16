// anonymousFunctions
var myF = function (...x) { //not working
    return "hi ";
}
var myF = function (...x) {
    return x;
}

console.log(myF("hi ", "abu ", "bakker ", "siddique"));