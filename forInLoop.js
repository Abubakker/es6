// forInLoop
var man = {
    shirt: true,
    shirtColor: "Black",
    smile: true,
    sunGlass: true,
    sunGlassColor: "black"
}

var manPro = {
    shirt: {
        quality: "Good",
        color: "White",
        price: "200USD"
    },
    sunGlass: {
        quality: "Mid",
        color: "Black",
        price: "20USD"
    },
    smile: true,
    sunGlass: true,
}

for (let props in man) {
    console.log(props + " => " + man[props]);
    // console.log(props + " => " + man.props);// all undefined
}
for (let props in man) {
    console.log(manPro)
}

// console.log(manPro["shirt"]["price"])
// console.log(manPro.shirt.price)