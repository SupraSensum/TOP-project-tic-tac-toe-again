// Think about how the game flow works
// 1. two players initiate a game
// 2. players enter their names
// 3. p1 enters their move
// 4. updated board is console.logged, if no collisions detected
// 5. game state checked
// 6. cycles to next player, if game state undetermined

import { Player } from "./Player.js";
import Gameboard from "./Gameboard.js";

export class GameController {
   #p1 = null;
   #p2 = null;
   #gameboard = null;

   constructor() {
      this.#gameboard = new Gameboard();
   }

   initGame() {
      this.#p1 = new Player(getPlayerName());
      this.#p2 = new Player(getPlayerName());
   }

   getPlayerName() {
      let name = '';

      while (name === '') {
         name = prompt("Enter name: ", '');

         if (name === '') {
            console.warn("Invalid player name. Try again.");
         }
      }

      return name;
   }

   playRound() {
      // prompt user for their move
      let userMove = this.getPlayerMove();

      while (!this.isInBounds(userMove)) {
         console.debug(`${userMove.x}, ${userMove.y} is out of bounds. Try again.`);
         userMove = this.getPlayerMove();
      }

      // check for conflict on gameboard
      if (userMove) {
         //    - if all is good, make the move AND switch the active player
         //    - if conflict, console.log AND prompt again
      }

      // check game state
   }

   getPlayerMove() {
      let move = prompt("Enter your move: ", '');

      // assuming `move` contains "x, y" or "x,y"
      // map input to object with x, y props
      const [x, y] = move.split(',').map(val => Number(val.trim()));
      const coordinates = { x, y };
      console.log({coordinates});

      return coordinates;
   }

   // move this method into the Gameboard class
   isInBounds(move) {
      const x = move.x;
      const y = move.y;

      const xIsGood = (x >= 0 && x <= 2) ? true : false;

      const yIsGood = (y >= 0 && y <= 2) ? true : false;

      return (xIsGood && yIsGood) ? true : false;
   }

   // move this method into the Gameboard class
   doesNotCollide(move) {
      
   }
}