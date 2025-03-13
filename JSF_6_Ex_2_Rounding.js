function rounding(a, b){
    if(b > 15){b = 15;}
    let x = parseFloat(a.toFixed(b));
    console.log(x);
}

rounding(3.1415926535897932384626433832795,2) 
//3.14 
rounding(10.5,3) 
//10.5