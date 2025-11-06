var a=[-13,2,0,4,5,6,-7,8,9,100]
var t1=a[2]
var t2=a[3]
console.log("array is",a)
for (i=0;i<a.length; i++){
    if(a[i]<t1){
        t1=a[i]
    }
    if(a[i]>t2){
        t2=a[i]
    }
}
console.log("bigger is",t2)
console.log("smaller is",t1)
