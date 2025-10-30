var a=10
var c=0
for(i=1;i<=a;i++){
    if(a%i==0){
        c=c+1
    }
}
if(c==2){
    console.log("prime")
}else{
    console.log(" not prime")
}
