//variableScope
var nameG = "Global";
function variableScope() {
    var name = "local";
    console.log(name)
    console.log(nameG)// Global
}

// console.log(name)// local
console.log(nameG)// Global

variableScope()