function arr4(arr){
    console.log(arr[arr.length-2]); 
    for (var i = 0; i>=0; i++){
        if(arr[i]%2!=0) {
            return arr[i];
        } 
}
}

console.log(arr4([4,6,86,20,619,6,81,6]));