//arraySetAction duplicate value not count

var aSet = new Set();

aSet.add("Bangladesh")
aSet.add("India")
aSet.add("US")
aSet.add("UK")
aSet.add("Pakistan")
aSet.add("Nepal")
aSet.add("Chaina")
aSet.add("India")
aSet.add("Chaina")


console.log("Full set: ");
console.log(aSet);


var bSet = new Set(['a', 'a', "b", 'c', "d"]);
bSet.delete("b");
console.log(bSet.size);
console.log(bSet);


console.log(aSet.values());

for (let v of aSet.values()) {
    console.log(v)
}

if (bSet.has('d')) {
    console.log("Yes")
} else {
    console.log("No")
}

bSet.clear();
console.log("after clear: ");
console.log(bSet);