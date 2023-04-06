function fun(call,randomNumberPlease){
    console.log("fun has started",randomNumberPlease)
    for(let x=0;x<randomNumberPlease;x++)
        call()
    console.log("fun has ended")
}

fun(function(){
    console.log("Anonymous run")
},Math.round(Math.random()*10))