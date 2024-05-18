#! /usr/bin/env node
import inquirer from "inquirer";

let msg = await inquirer.prompt([
  {
    message: "Player 1 turn\nChoose any one of them",
    type: "list",
    name: "player1",
    choices: ["ROCK", "PAPER", "SCISSOR"],
  },
  {
    message: "Player 2 turn\nChoose any one of them",
    type: "list",
    name: "player2",
    choices: ["ROCK", "PAPER", "SCISSOR"],
  },
]);

if (
  (msg.player1 == "ROCK" && msg.player2 == "SCISSOR") ||
  (msg.player1 == "SCISSOR" && msg.player2 == "PAPER") ||
  (msg.player1 == "PAPER" && msg.player2 == "ROCK")
) {
    console.log("Player 1 is winner!!")
}
else if(msg.player1==msg.player2){
    console.log("Match is Tied")
}
else{
    console.log("Player 2 is winner!!")
}
console.log(msg)
