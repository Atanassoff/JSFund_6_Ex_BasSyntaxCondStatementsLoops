function division(n){
    let expression = "";
    if(n % 10 === 0){expression = "The number is divisible by 10";}
    else if(n % 7 === 0){expression = "The number is divisible by 7";}
    else if(n % 6 === 0){expression = "The number is divisible by 6";}
    else if(n % 3 === 0){expression = "The number is divisible by 3";}
    else if(n % 2 === 0){expression = "The number is divisible by 2";}
    else{expression = "Not divisible";}
    console.log(expression);
}

2, 3, 6, 7, 10

division(30) 
//The number is divisible by 10
division(15) 
//The number is divisible by 3
division(12) 
//The number is divisible by 6
division(1643)
//Not divisible