export default class Gameboard {
   constructor() {
      this.board = this.#createInitBoard();
   }

   #createInitBoard() {
      const board = [];
      
      for (let i = 0; i < 3; i++) {
         board[i] = [];

         for (let j = 0; j < 3; j++) {
            board[i][j] = null;
         }
      }

      return board;
   }
}