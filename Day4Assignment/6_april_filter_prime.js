function prime(n){
    var n,i,flag=true;
    for (i=2;i<n;i++){
        if(n%i===0){
            flag=false;
            break;
        }
        if (flag===true)
            return n
    }
}
sequence=[1,2,3,4,5,6,7,8,9,10,11,13,17,19,23,29]
 const filtered=sequence.filter(prime)
console.log(filtered)
