function pyramidOfKingDjoser(size, height) {
    let stone = 0;
    let stoneSide = size - 2;
    let marble = 0;
    let marblePerimeter = size * 2 + (size - 2) * 2;
    let lapis = 0;
    let gold = 0;
    let steps = 0;
    let finalHeight = 0;
    if (size % 2 == 0) {
        steps = size / 2;
        finalHeight = Math.floor(steps * height);
        gold = Math.ceil(4 * height);
    } else {
        steps = (size + 1) / 2;
        finalHeight = Math.floor(steps * height);
        gold = Math.ceil(height);
    }
    for (let i = 1; i < steps; i++) {
        stone += stoneSide * stoneSide;
        stoneSide -= 2;
        if(i % 5 != 0){
            marble += marblePerimeter;
            marblePerimeter -= 8;
        }
        else{
            lapis += marblePerimeter;
            marblePerimeter -= 8;
        }
    }
    stone = Math.ceil(stone * height);
    marble = Math.ceil(marble * height);
    lapis = Math.ceil(lapis * height);
    console.log(`Stone required: ${stone}`); 
    console.log(`Marble required: ${marble}`); 
    console.log(`Lapis Lazuli required: ${lapis}`); 
    console.log(`Gold required: ${gold}`); 
    console.log(`Final pyramid height: ${finalHeight}`);
}

pyramidOfKingDjoser(11, 1)
//Stone required: 165 
//Marble required: 112 
//Lapis Lazuli required: 8 
//Gold required: 1 
//Final pyramid height: 6
pyramidOfKingDjoser(11, 0.75)
//Stone required: 124 
//Marble required: 84 
//Lapis Lazuli required: 6 
//Gold required: 1 
//Final pyramid height: 4
pyramidOfKingDjoser(12, 1)
//Stone required: 220 
//Marble required: 128
//Lapis Lazuli required: 12 
//Gold required: 4 
//Final pyramid height: 6 