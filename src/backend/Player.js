export class Player {
   #score = 0;
   #name = null;

   constructor(name) {
      this.name = name;
      console.log(`Name set to "${this.name}"`);
   }

   increaseScore() {
      this.#score++;
      console.log(`${this.#name}'s score is now ${this.#score}`);
   }

   get score() {
      return this.#score;
   }

   get name() {
      return this.#name;
   }

   set name(name) {
      if (name === "Patrick") console.log("GOOD NAME");

      this.#name = name;
   }
}