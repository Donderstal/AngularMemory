import { Injectable } from '@angular/core';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor(private gameService: GameService) { }

  
  compareCard (card1, card2) {
    this.gameService.game.compared = true
      if (card1.imagePath == card2.imagePath) {
        card2.guessed = true
        card1.guessed = true
        this.gameService.game.matches += 1
          setTimeout(() => this.gameService.game.compared = false, 1000)
        if (this.gameService.game.matches == 8) {
          setTimeout(() => this.gameService.endGame(), 1000)
        }
      }
      else {
        card1.flipped = false
        card2.flipped = false
        setTimeout(function(){
          document.getElementById('cardIMG' + card2.id).setAttribute("src", "../../../assets/embraceIT.jpg")
          document.getElementById('cardIMG' + card1.id).setAttribute("src", "../../../assets/embraceIT.jpg")}, 1000)
          setTimeout(() => this.gameService.game.compared = false, 1000)
    }
  }
}
