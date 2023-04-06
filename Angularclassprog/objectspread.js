laptopA={
    sno:"ABCD123",
    RAM: "8 gb",
    disk:"256 gb"
}
// laptopB=laptopA
//it copies the reference and change in one object affects other

laptopB={...laptopA, sno:"ABCD124"}
console.log(laptopA)
console.log(laptopB)