//arrayMap

var aMap = new Map();

aMap.set("k1", "Bangladesh")
aMap.set("k2", "India")
aMap.set("k3", "US")
aMap.set("k4", "UK")
aMap.set("k5", "Pakistan")
aMap.set("k6", "Nepal")
aMap.set("k7", "Chaina")


console.log("Full map: ")
console.log(aMap)
console.log("Map keys: ")
console.log(aMap.keys())
console.log("Map values:")
console.log(aMap.values())

for (let k of aMap.keys()) {
    console.log(k)
}

for (let v of aMap.values()) {
    console.log(v)
}

aMap.delete("k7")
console.log(aMap)

console.log(aMap.get('k3'))
if (aMap.has('k3')) {
    console.log("Yes")
} else {
    console.log("No")
}


aMap.clear()
console.log(aMap)

// console.log(get("k1"))