function leapYear(year){
    if(year%400==0 || year%4==0){
        return true;
    } else if(year%100==0){
        return false;
    }
    return false;
}

if (leapYear(2404)){
    console.log("True")
} else{
    console.log("False");
}