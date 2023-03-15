// forOfLoopSimple

let poorCountry = ['Bangladesh', "Sirilanka"];
let richCountry = ['USA', "UK", "Italy"];

let country = [...poorCountry, ...richCountry];

for (let countryName of country) {
    console.log(countryName)
}