// classInheritance
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

}

var childObj = new parentClass;

childObj.MyA()
childObj.MyB()
childObj.MyX("Nayagola")
