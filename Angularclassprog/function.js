function first(a,b){
    console.log(a,b)
}

first()
first(20)
first(132,"rahul")
first("odelu","arjun")
first(12,13,243)
first([34,34,5,34])


function sample(){
    console.log("this is a sample function")

}

store= sample
//sample references is hold store
//now store and the sample are the one

store()

fun=function(){
    console.log("sampl text")
}

//function() is anonymous function
//assigning anonymous function to a varaible  can access by variable by variable name

fun()
