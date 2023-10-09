
const readline = require("readline-sync")
let inventory = ["sword", "bag of holding", "healing potion", "double axes", "book of spells"]
let enemies = ["Cthulu", "Cat-thulu", "giant lobster", "horde of spiders"]


function Player(name) {
    this.name = name
    this.hp = 100
    this.inventory = []
    this.alive = true
};

Player.prototype.printStatus = function() {
    console.log(`${this.name.toUpperCase()}\nHP: ${this.hp}\nInventory: ${this.inventory}\n`)
};

function Enemy(name) {
    this.name = name
    this.hp = 10
}

Enemy.prototype.printStatus = function() {
    console.log(`${this.name.toUpperCase()}\nHP: ${this.hp}\n`)
}

// input: target of the attack (object)
// output: damage inflicted (int)
//subtracts damage from target's hp 
function attack(target) {
    let damage = Math.floor(Math.random() * 4)
    target.hp -= damage
    return damage
}

//input: none
//output: false if no enemy, string if enemy 
//random 1/3 odds of enemy appearing, 1/4 odds which enemy it is 
function doesWildEnemyAppear() {
    const chance = Math.floor(Math.random() * 10)
    
    if (chance < 3) {
        const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)]
        return randomEnemy
    }
    else {
        return false
    }
}

function main() {
    console.log("Welcome to the Colossal Adventure!")

    //create player 
    let playerName = readline.question("What is your name? \n")
    let player = new Player(playerName);

    // play sequence begins
    while (player.alive) {
        if (enemies.length == 0) {
            console.log("You've survived! You win!")
            process.exit()
        }
        console.log("You can press 'p' or 'Print' at any time to see your stats. Godspeed.")
        let walk = readline.question("Press 'w' to walk.  ")

        //add print functinality here 
        while (walk != 'w' && walk != 'p' && walk != 'Print') {
            walk = readline.question("That's not an option. Press 'w' to walk.  ")
        }

        const isEnemy = doesWildEnemyAppear()

        if (walk == 'p' || walk == 'Print') {
            player.printStatus()
        }

        else if (isEnemy) {
            //spawn enemy 
            let enemy = new Enemy(isEnemy);
            console.log(`Look out! A wild ${enemy.name} appears!`)
            
            let actionList = ["attack", "run", "print player status"]

            //returns index of corresponding choice in actionList
            let action = readline.keyInSelect(actionList, "Will you attack or run?")

            //eliminate cancel choice
            while (action != 0 && action != 1 && action != 2) {
                action = readline.keyInSelect(actionList, "You must choose an action! Which will you choose?")
            }
            while (action == 2) {
                player.printStatus()
                action = readline.keyInSelect(actionList, "Choose your next move!")
            }
            if (action == 0) {
                console.log("Attack!\n")

                //damage between 0 and 4
                let playersTurn = true
                while (enemy.hp > 0 && player.hp > 0) {
                    if (playersTurn) {
                        readline.question("Press Enter to initiate the attack!")
                        
                        let damage = attack(enemy);
                        console.log(`${player.name} did ${damage} damage to ${enemy.name}!`)
                        enemy.printStatus()
                        player.printStatus()
                        playersTurn = false
                    }
                    else {
                        let damage = attack(player)
                        console.log(`${enemy.name} did ${damage} damage to ${player.name}!`)
                        enemy.printStatus()
                        player.printStatus()
                        playersTurn = true
                    }
                }
                if (player.hp > 0) {
                    console.log("You survived, for now. Here's 7 hp.")
                    player.hp += 7
                    enemies.splice(enemies.indexOf(enemy.name), 1)
                    player.inventory.push(inventory.pop())
                    player.printStatus()
                }
                else {
                    console.log("You're dead!")
                    player.alive = false
                }
            }
            else if (action == 1) {
                console.log("You chose to run! You have a 50% chance of escape - good luck!")

                let escape = Math.round(Math.random() * 2)
                if (escape < 1) {
                    console.log("You're dead!")
                    player.alive = false
                }
                else {
                    console.log(escape)
                    console.log("You survived!")
                }
            }
            else if (action == 2) {
                player.printStatus()
            }
        }
        else {
            console.log("No enemies here! You're safe (for now).")
        }
    }
}

main();