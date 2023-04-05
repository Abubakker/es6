// classInheritanceSuperKeyword
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

    MyB() { // method override
        super.MyB();
        super.MyA()
        super.MyX("O pithibi...")
    }
}

var childObj = new childClass;

childObj.MyB()
