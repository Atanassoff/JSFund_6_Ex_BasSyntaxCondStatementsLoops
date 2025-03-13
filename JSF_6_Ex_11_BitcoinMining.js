function bitcoinMining(input) {
    let gold = 0;
    let money = 0;
    let bitcoins = 0;
    let firstDay = 0;
    let days = 0;
    let firstBitcoin = false;
    for (let i = 0; i < input.length; i++) {
        days++;
        gold = input[i];

        if (days % 3 === 0) {
            gold *= 0.7;
        }
        money += (gold * 6751);

        if (money >= 1194916) {
            if (firstBitcoin === false) {
                firstDay = i + 1;
            }
            bitcoins += Math.floor(money / 1194916);
            money %= 1194916;
            firstBitcoin = true;
        }
    }
    if (firstDay > 0) {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
        console.log(`Left money: ${(money / 100).toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Left money: ${(money / 100).toFixed(2)} lv.`)
    }
}

//1 Bitcoin 11949.16 lv.
//1 g of gold 67.51 lv.

bitcoinMining([100, 200, 300])
//Bought bitcoins: 2 
//Day of the first purchased bitcoin: 2 
//Left money: 10531.78 lv.
bitcoinMining([50, 100])
//Bought bitcoins: 0 
//Money left: 10126.50 lv. 
bitcoinMining([3124.15, 504.212, 2511.124])
//Bought bitcoins: 30 
//Day of the first purchased bitcoin: 1 
//Money left: 5144.11 lv.