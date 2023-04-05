// classInheritance method override
class parentClass {
    constructor() {
        console.log("constructor");
    }

    MyA() {
        console.log("A class");
    }

    MyB() {
        console.log("Bangladesh");
    }

    MyC() {
        console.log("Chapai nawabganj");
    }

    MyX(X) {
        console.log(X);
    }
}

class childClass extends parentClass {
    MyA() {
        console.log("A class from child Class"); // method override
    }
}

var childObj = new childClass;

childObj.MyA()
childObj.MyB()
childObj.MyX("Nayagola")
