function vacation(num, group, day){
    let price = 0;
    switch(group){
        case"Students": 
        switch(day){
            case"Friday": price = 8.45 * num; break;
            case"Saturday": price = 9.80 * num; break;
            case"Sunday": price = 10.46 * num; break;
            default: break;
        }
        if(num >= 30){price *= 0.85;}
        break;
        case"Business": 
        if(num >= 100){num -= 10;}
        switch(day){
            case"Friday": price = 10.90 * num; break;
            case"Saturday": price = 15.60 * num; break;
            case"Sunday": price = 16 * num; break;
            default: break;
        }
        break;
        case"Regular": 
        switch(day){
            case"Friday": price = 15 * num; break;
            case"Saturday": price = 20 * num; break;
            case"Sunday": price = 22.50 * num; break;
            default: break;
        }
        if(num >= 10 && num <= 20){price *= 0.95;}
        break;
        default: break;
    }
    console.log(`Total price: ${price.toFixed(2)}`); 
}

vacation(30, "Students", "Sunday") 
//Total price: 266.73
vacation(40, "Regular", "Saturday") 
//Total price: 800.00

//        Friday Saturday Sunday
//Students  8.45  9.80     10.46
//Business 10.90  15.60    16
//Regular  15       20      22.50

//Students – bigger than or equal to 30 reduce the total price by 15%
//Business – bigger than or equal to 100 people 10 of them can stay for free
//Regular – bigger than or equal to 10 and less than or equal to 20 reduce by 5%