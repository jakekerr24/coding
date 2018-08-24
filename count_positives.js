// this function is intended to add all positive intergers in an array and return the total value as the last value of the array
function arr6(arr){
    var count = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>0){
            count+=1;
        }
    }
    arr[arr.length-1]=count;

    return arr;
}

console.log(arr6([15,-5,-3,8,5])) //