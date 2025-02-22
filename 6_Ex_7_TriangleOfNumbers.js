function triangleOfNumbers(n){
    let buff = "";
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            buff += `${i} `;
        }
        console.log(buff);
        buff = "";
    }
}

triangleOfNumbers(3) 
//1 
//2 2 
//3 3 3 
triangleOfNumbers(5) 
//1 
//2 2 
//3 3 3 
//4 4 4 4 
//5 5 5 5 5 
triangleOfNumbers(6) 
//1 2 2 3 3 3 4 4 4 4 5 5 5 5 5 6 6 6 6 6 6