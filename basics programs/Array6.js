var a=[1,2,3,4,5,6,7,8,9,10]
for (i=0;i<a.length; i++){
    var c=0
    for (j=1;j<=a[i];j++){
        if(a[i]%j==0){
            c=c+1
        }
    }
    if(c==2){
        console.log(a[i])
    }
}