let count=1;
let interval;
function update(){
    document.getElementById("time").innerHTML=count;
    if(count===0){
        clearInterval(interval);
        displaygif(); 
        document.getElementById("time").innerHTML="Fire Work Begins";

    }else{
        count--;
    }
}
function displaygif(){
    document.getElementById("gif").style.display="block";
}
interval=setInterval(update,1000);
