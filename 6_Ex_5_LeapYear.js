function leapYear(year){
    let answer = "";
    if(year % 400 === 0){answer = "yes";}
    else if(year % 100 === 0){answer = "no";}
    else if(year % 4 === 0){answer = "yes";}
    else{answer = "no";}
    console.log(answer);
}

leapYear(1984) 
//yes
leapYear(2003) 
//no
leapYear(4) 
//yes