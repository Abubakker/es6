// functionReturns
function f() {
    return "Abu bakker"
}

console.log(f())

function f2() {
    return 2
}

function f3() {
    return 3
}

function f4() {
    return f2()
}

console.log(f2() + f3() + f4())