var s=6
var a=0
console.log(s)
for(var i=1;i<=s;i++){
    if(s%i==0){
        a=a+i
    }
}
if(a==2*s){
    console.log("perfect no")
}else{
    console.log(" not a perfect no")
}