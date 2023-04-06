function giveData(){
    setTimeout(()=>{
        console.log("PROCESSINGGGG")
        return  "INDIA";
    },3000)
}

info=giveData()
console.log("SOMETHING ELSE");

console.log(info)
