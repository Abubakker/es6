// object
var man = {
    shirt: true,
    shirtColor: "Black",
    smile: true,
    sunGlass: true,
    sunGlassColor: "black"
}
console.log(man['sunGlass']);

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
console.log(manPro["shirt"]["price"])
console.log(manPro.shirt.price)