var a=[10,1000,101,105,5,86,-7,8,99,100,21,9]
var t2=a[3]
console.log("array is",a)
for (i=0;i<a.length; i++){
    if(a[i]>t2){
        t2=a[i]
    }
}
var t1=a[0]
if(t1==t2){
    t1=a[1]
}
for (i=0;i<a.length; i++){
    if(a[i]>t1 && a[i]<t2 ){
        var t1=a[i]
    }
}
console.log(" second bigger is",t1)
