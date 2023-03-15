function f(a, b, c, ...numbers) {
    let sum = 0;
    sum = a + b + c;
    for (let i of numbers) {
        sum += i;
    }
    console.log("Sum = " + sum);
}

f(50, 50, 100, 1, 2, 3, 4, 5, 300);