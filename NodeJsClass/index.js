const fs=require("fs")
const data=require("./second")
/*fs.readFile("package.json","utf-8",function(error,data){
    if (error)
        console.log("error in reading file")
    else
        console.log(data)
})

console.log("AFTER READING THE FILE")
//readFile reads in binary formaat ,utf-8 converts to text
//function should have two arguements ,1. error 2.data
fs.readFile("package.json","utf-8",(error,data)=>{
    if (error)
        console.log("error in reading file")
    else
        console.log(data)
})*/
data.fun();
console.log(data.people);
console.log(data.personObject);
