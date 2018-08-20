// setting and swapping
var myName = "Jake";
var myNumber = 42;
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

function countDown(num) {
    var arr=[];
    
    for(i=num; i>=0; i--){
        arr.push(i);
    }
    // console.log(arr);
    return arr;
}
var x=countDown(14);
console.log(x);
