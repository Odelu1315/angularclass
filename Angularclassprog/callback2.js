function sample(callback1,callback2,number1,number2){
    console.log("sample function started");
    result=callback1(number1)+callback2(number2)
    console.log("sample function ended and the result is ",result)
}

function callback1(number1){
    result=0
    while(number1>0){
        result+=number1%10;
        number1=Math.floor(number1/10);
    }
    return ""+result
}

function callback2(number2){
    copy=number2;
    result=0;
    while(copy>0){
        result=result*10+(copy%10);
        copy=Math.floor(copy/10)
    }
    return""+result
}
sample(callback1,callback2,125,321)