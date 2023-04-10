function sample(){
    var a=30
    console.log(a)
    {
        //var a=45(it affects the functional level variable)
        let a=45
        console.log(a)
    }
    console.log(a)
}
sample()
//let keyword is for block level(inside curly braces)

const a=90
for(let a=0;a<10;a++)
    console.log(a)
console.log(a)
//for is block level so use let keyword for "for loop"