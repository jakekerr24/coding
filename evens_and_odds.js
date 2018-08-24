// goal is to print "That's odd!" if 3 odds in a row and "Even more so!" if 3 evens in a row.

  // for each # in the array, 
        //check if the number is odd or even 
        // if there are three numbers of each in a row,
        // print a string 
    
    // should I split up between odd or even? 
    // i, i+1, i+2? 
    // how do I know if they are in a row? 

function arr7(arr){ 
    for (var i = 0; i<arr.length-2; i++){
        if (arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0){
            console.log("Even more so!");
        }
        if (arr[i] % 2 != 0 && arr[i+1] % 2 != 0 && arr[i+2] % 2 != 0){
            console.log("That's odd!");
        }
    }
}

arr7([2,4,6,5,7,9]); //expected outcome is "Even more so!" "That's odd!"