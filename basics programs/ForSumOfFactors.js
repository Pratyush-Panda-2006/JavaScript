var s=18
var a=0
console.log(s)
for(var i=1;i<=s;i++){
    if(s%i==0){
        console.log(i)
        a=a+i
    }
}
console.log("sum is ",a)