var a=121
if(a>=100 && a<=999){
    var k=a%10
    var l=a%100
    var m= parseInt(l/10)
    var n= parseInt(a/100)
    var r=(k*100)+(m*10)+n
    if(a==r){
        console.log("pallindrome")
    }else{
        console.log("pallindrome")
    }
}else {
    console.log("enter 3 digit no")
}