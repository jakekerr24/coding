// setting and swapping
// var myName = "Jake";
// var myNumber = 42;
// var temp = myName;
// myName = myNumber; 
// myNumber = temp;
// console.log (myName);
// console.log (myNumber); 

// print 0 to 255 using a for loop
// for(var i=0; i<256; i++) {
//     console.log (i);
// };
// var x=0;
// while(x<256) {
//     console.log(x);
//     x++; 
// }
// var i=6
//     while(i<=60000){
//         console.log(i);
//         i+=6;
//     }

// for(var i=1; i<=100; i++){ 
//     if(i%5===0) {
//         console.log("coding"); 
//     } else {
//         console.log(i);
//     }

//     if(i%10==0) {
//         console.log("dojo");
//     }
// } 

// function whatDoYouKnow(param) {
//     console.log(param);
// }
// whatDoYouKnow("Hello");

// function flexCountdown(lowNum, hiNum, mult) {
//     for(var i=hiNum; i>=lowNum; i--){
//         if(i%mult==0){
//             console.log(i);
//         }    
//     }
// }
// flexCountdown(2,51,3);

// function countDown(num) {
//     var arr=[];
    
//     for(i=num; i>=0; i--){
//         arr.push(i);
//     }
//     // console.log(arr);
//     return arr;
// }
// var x=countDown(14);
// console.log(x);

// function leapYear(year){
//     if(year%4==0){
//         console.log("leap year");
//     } else if(year%100==0){
//         console.log(year);
//     }
//             //  } else(year%400==0);{
//             //          console.log("leap year")
                 
//         // return year;
// }

// console.log(leapYear(2000))

// var arr=[2,10,6,8];
// temp=arr[1];

// console.log(arr);

// function arrayTest(number){
//     for(var i=number; i>=0; i--){
        
//     }
// }

// var arr=[1,2,4,8,9];
// arr.push([5,9,[5,8,1256,648],576]); 
// console.log(arr[5][2][1]);

// function countDown(number){
//     var arr=[];
//     for(var i=number; i>0; i--){
//         arr.push(i);
//         // console.log("i:", i, "arr:", arr);
//     }
//     // console.log(arr);
//     return arr; 
// }
// // console.log(countDown(15).length);

// var x=countDown(15); 
// console.log(x, x.length);

// function printReturn(arr){
//     console.log(arr[0]);
//     return arr[1];
// }

// console.log(printReturn([5,4,85,519,656]));

// function givenArray(pizza){
//     return (pizza[0]+pizza.length);
// }
// console.log(givenArray([4,87,56,566846]));

// function valuesGreater(arr){
//     var count = 0;
//     for (var i = 0; i<arr.length; i++){
//         if(arr[i]>arr[1]){
//             console.log(arr[i]);
//             count+=1; 
//         }
//     }
//     return count;
// }
// var x = valuesGreater([45,664,8131,68465,1643,5186,468,468,13,84,314,83438,4,38]);
// console.log("count:",x);

// function lengthValue(num1, num2){
//     var arr = [];
//     for (var i = arr; num1; i.push(num2)){
//         console.log(i);
//     } 
    // else (num1=num2){
    //     return "Jinx!";
    

// lengthValue(4,5);

// function arrayTest2(arr){
//     if(arr[0]>arr.length){
//         console.log("Too big!");
//     } 
//     else {
//         console.log("Too small!");
//     }
// }
// arrayTest2([4,51636,489,5131,5489]);

// function fToC(f){
//     var i = (f-32)*(5/9);
//     console.log(i); 
// }

// fToC(30);

// function arrTest(num1, num2){
//     if(num1 == num2){
//         console.log("Jinx!");
//     }
//     var arr = []; 
//     for (var i = 0; i < num1; i++){ 
//         arr.push(num2); 
//     }
//     return(arr);
// }
// console.log(arrTest(8,8)); 

// function makeItBig(arr){
//     for (var i = 0; i>0; i++){
//         arr[i]="big";
//     } 
//     console.log(arr);
// }

// makeItBig([-5,-64,56,5,-4,5,-7,6]);

// function arr4(arr){
//     console.log(arr[arr.length-2]); 
//     for (var i = 0; i>=0; i++){
//         if(arr[i]%2!=0) {
//             return arr[i];
//         } 
// }
// }

// console.log(arr4([4,6,86,20,619,6,81,6]));

// function arr5(arr){
//     for (var i = 0; i<arr.length; i++){
//         arr[i]=arr[i]*2;
//     }
//     return(arr);
// }

// console.log(arr5([5,48,345,3,388,3838338,4])); 

// function arr6(arr){
//     var count = 0;
//     for (var i = 0; i<arr.length; i++){
//         if (arr[i]>0){
//             count+=1;
//         }
//     }
//     arr[arr.length-1]=count;
    
    
//     return arr;
// }

// console.log(arr6([15,-5,-3,8,5])); //expected end result to be [15,-5,-3,8,3]

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

    // for each # in the array, 
        //check if the number is odd or even 
        // if there are three numbers of each in a row,
        // print a string 
    
    // should I split up between odd or even? 
    // i, i+1, i+2? 
    // how do I know if they are in a row? 

arr7([2,4,6,5,7,9]); //expected outcome is "Even more so!" "That's odd!"