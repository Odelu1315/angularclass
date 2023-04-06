function giveData(){
    return new Promise(
        function(resolve,reject){
            setTimeout(()=>{
                console.log("processing")
                resolve("INDIA");
            },3000)
        }
    )
}
/*result=giveData()

result.then(
    (success)=>console.log("DATA is",success),
    (error)=>console.log(error)
)*/
async function caller(){
    data= await giveData()
    console.log("Data is",data)
}
console.log("SOMETHING ELSE")