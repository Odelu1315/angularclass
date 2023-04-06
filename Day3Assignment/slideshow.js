let slide=document.getElementById("slidesshow");
let index=0;
let slideimages=["bluebeach.jpg","disney.jpg","harbourbridge.jpg","seaimage.jpg","saaho1.jpg","saaho2.jpg"];
setInterval(function(){
    slidesshow.src=slideimages[index];
    index=(index+1) % slideimages.length;
},2000);

