function printAndSum(a, b){
    let buff = "";
    let sum = 0;
    for(let i = a; i <= b; i++){
        buff += `${i} `;
        sum += i;
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10) 
//5 6 7 8 9 10 
//Sum: 45
printAndSum(0, 26) 
//0 1 2 … 26 
//Sum: 351
printAndSum(50, 60) 
//50 51 52 53 54 55 56 57 58 59 60 
//Sum: 605