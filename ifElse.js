// ifElse
var man = {
    shirt: true,
    shirtColor: "Black1",
    smile: true,
    sunGlass: true,
    sunGlassColor: "black"
}

if (man["shirtColor"] == "Black") {
    console.log("Shirt color is Black");
} else if (man["shirtColor"] == "Red") {
    console.log("Shirt color is Red");
} else if (man["shirtColor"] == "White") {
    console.log("Shirt color is White");
} else {
    console.log("Shirt color is not found color");
}