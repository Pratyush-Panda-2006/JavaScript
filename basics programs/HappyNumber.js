var n = 1034;
var m = 0;
var a = 0;
console.log("Number is",n);
while(a==0){
    var s = 0;
    while(n!=0){
        var x = n%10;
        s = s+(x*x);
        n = parseInt(n/10);
    }
    if(s>=10){
        n = s;
    }else{
        a+=1;
        m = s;
    }
}
if(m == 1 || m == 7){
    console.log("Happy Number");
}else{
    console.log("Not Happy Number");
}
