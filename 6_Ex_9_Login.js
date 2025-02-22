function login(input){
    let user = input[0];
    let password = "";
    for(let i = user.length - 1; i >= 0; i--){
        password += `${user[i]}`;
    }
    for(let j = 1; j <= 4; j++){
        if(password === input[j]){
            console.log(`User ${user} logged in.`);
            break;
        }
        else if(j < 4){console.log("Incorrect password. Try again.");}
        else{console.log(`User ${user} blocked!`)}
    }
}

login(['Acer','login','go','let me in','recA']) 
//Incorrect password. Try again. 
//Incorrect password. Try again. 
//Incorrect password. Try again. 
//User Acer logged in.
login(['momo','omom']) 
//User momo logged in.
login(['sunny','rainy','cloudy','sunny','not sunny']) 
//Incorrect password. Try again. 
//Incorrect password. Try again. 
//Incorrect password. Try again. 
//User sunny blocked!
