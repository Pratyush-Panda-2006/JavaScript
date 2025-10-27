var a=2253
console.log("the no is",a)
var n=a
var m=a
var t=m%10
while(n!=0){
    var k= n%10
    if(k>t){
        t=k
    }
    n=parseInt(n/10)
}
console.log("Greater no is",t)