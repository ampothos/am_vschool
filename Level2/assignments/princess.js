const statusList = ["Powered Up", "Big", "Small", "Dead"];

class Player {
    constructor () {
        this.name = "";
        this.totalCoins = 0;
        this.status = statusList[0];
        this.hasStar = false;
    }
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit() {
        let index = statusList.indexOf(this.status);
        if (this.hasStar) {
            console.log("\nYour star saved you!");
            this.print();
            this.hasStar = false;
        }
        else if (index < 3) {
            this.status = statusList[index + 1];
        }
        else {
            console.log("You're dead");
        }
    }
    gotPowerUp() {
        let index = statusList.indexOf(this.status);
        if (index == 0) {
            this.hasStar = true;
        }
        else {
            this.status = statusList[index - 1];
        }
    }
    addCoin() {
        this.totalCoins += 1;
    }
    print() {
        console.log(`\nName: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`);
        if (this.hasStar) {
            console.log("You have a star!");
        }
    }
}

let player = new Player();
player.setName("Mario");

player.print();

function randomAction(playerObj) {
    let chance = Math.floor(Math.random() * 3);
    if (chance == 0) {
        playerObj.gotHit();
    }
    else if (chance == 1) {
        playerObj.gotPowerUp();
    }
    else if (chance == 2) {
        playerObj.addCoin();
    }
    playerObj.print()
}

const intervalId = setInterval(() => {
    if (player.status == "Dead") {
        clearInterval(intervalId);
        console.log("You're dead!");
    }
    else {
        randomAction(player);
    }
}, 1000);


