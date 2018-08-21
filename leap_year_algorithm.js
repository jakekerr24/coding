function leapYear(year){
    if(year%400==0){
        console.log("leap year");
    } else if(year%100==0){
        return year;
    } else if (year%4==0){
        console.log("leap year");
    }         return year;
}

console.log(leapYear(2500));