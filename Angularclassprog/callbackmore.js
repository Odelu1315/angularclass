function  filterthis(arrayFilter, array){
    result=[];
    for (let x of array)
        if (arrayFilter(x))
            result.push(x)
    return result
}

/*fresult =filterthis(function(x){
    return x%2==0? false:true;
},[23,24,25,26,27,28])

console.log(fresult)

fresult2=filterthis(function(x){
    if (x.length>5)
        return true
    return false
},["odelu","dedalus","RRR","kousiiiiiii","shashikanth"])

console.log(fresult2)*/
candidates = [
    {sno:1,name:"Jose",skills:['C++','Java','Javascript']},
    {sno:2,name:"Kiran",skills:['C++','C#','Javascript','CSS','SQL']},
    {sno:3,name:"Mohit",skills:['C++','Java','Javascript','Angular','React']},
    {sno:4,name:"Vinay",skills:['C++','Java','Javascript','Android','IOS','Angular']},
    {sno:5,name:"Arjun",skills:['C++','Java','Javascript','angular',"c#",'IOS','MongoDB']}
    ]
fresult3= filterthis(function(candidate){
    for (let k of candidate.skills)
        if (k.toLowerCase()=="c#" || k.toLowerCase()=="angular")
            return true
        return false
},candidates)
console.log(fresult3)