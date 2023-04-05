// classStaticFun
class TestClass {
    constructor() {
        console.log("constructor");
    }

    static MyName() {
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
}

var obj = new TestClass;

obj.MyX("Nayagola")
// obj.MyName() // not use like it's
TestClass.MyName()