import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  game = {
    running: false,
    comparing: false,
    compared: false,
    gameOver: false,
    matches: 0
  }

  constructor() { }

  startGame(){
    this.game.running = true
    alert("Good luck!")
  }

  endGame() {
    alert("This game is over!")
    this.game.running = false
    this.game.gameOver = true
  }
}
