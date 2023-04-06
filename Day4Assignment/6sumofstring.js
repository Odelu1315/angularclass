list1=["odelu","shashikanth","aashish","kiran","rithick","rrr","kousii"]
list2=list1.map(function(element){
    return element.length
})
function sumoflist(prevvalue,currentvalue){
    return prevvalue+currentvalue
}
let result=list2.reduce(sumoflist)
console.log(result)