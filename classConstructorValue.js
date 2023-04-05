// classConstructorValue
class TestClass {
    constructor(x, y) {
        console.log("First value: " + x + " Second value: " + y);
        this.firstVal = x;
        this.secondVal = y;
    }

    MyName() {
        console.log("My name is bakker");
    }

    MyA() {
        console.log("Chapai nawabganj");
    }

    MyC() {
        console.log("Bangladesh");
    }

    MyX(X) {
        console.log(X);
    }

    add() {
        let sum = this.firstVal + this.secondVal;
        return sum
    }
}

var obj = new TestClass(50, 100);

console.log(obj.add())
obj.MyX(500)