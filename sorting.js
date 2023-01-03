function bubleSort(arr){
    // for(let i=arr.length;i>0; i--){
        for (let i=0;i<arr.length;i++){
        for(let j=0;j<=i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }

        }
    }
    return arr;
}
let result =bubleSort([5,3,4,1,2,8,6,7])
console.log(result)