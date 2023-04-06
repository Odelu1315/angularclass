list1=["odelu","shashikanth","aashish","kiran","rithick","rrr","kousii"]
function lengthystring(prevvalue,currentvalue){
    if (prevvalue.length>currentvalue.length)
        return prevvalue
    else
        return currentvalue}
let result=list1.reduce(lengthystring)
console.log(result)
