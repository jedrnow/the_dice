class Dice{
    constructor(x){
        this.x=x;
    }

    roll(){
        this.x=Math.floor(Math.random()*(6-1))+1;        
    }
}
the_dice = new Dice(1);


document.querySelector("#mybutton").onmousedown = function(){
    const diceimg = document.querySelector("#diceimg");
    diceimg.src = "img/dice_roll.gif";
}

document.querySelector("#mybutton").onmouseup = function(){
    const diceimg = document.querySelector("#diceimg");
    the_dice.roll();
    diceimg.src = `img/dice_${the_dice.x}.png`;
}
