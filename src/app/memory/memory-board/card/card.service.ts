import { Injectable } from '@angular/core';
import { CardModel } from './card.model'
import { GameService } from '../../game.service';
import { CompareService } from '../../compare.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  initialCards: object[] = [
    { 
      id: 1,
      imagePath: '../../../assets/1.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 2,
      imagePath: '../../../assets/1.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 3,
      imagePath: '../../../assets/2.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 4,
      imagePath: '../../../assets/2.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 5,
      imagePath: '../../../assets/3.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 6,
      imagePath: '../../../assets/3.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 7,
      imagePath: '../../../assets/4.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 8,
      imagePath: '../../../assets/4.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 9,
      imagePath: '../../../assets/5.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 10,
      imagePath: '../../../assets/5.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 11,
      imagePath: '../../../assets/6.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 12,
      imagePath: '../../../assets/6.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 13,
      imagePath: '../../../assets/7.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 14,
      imagePath: '../../../assets/7.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 15,
      imagePath: '../../../assets/8.jpg',
      flipped: false,
      guessed: false },
    { 
      id: 16,
      imagePath: '../../../assets/8.jpg',
      flipped: false,
      guessed: false },
    
  ]
  cards = this.shuffle(this.initialCards)
  selectedCard: object;
  clicks: number = 0;

  constructor(
    private gameService: GameService,
    private compareService: CompareService,
  ) { 
  }

  onClickCard(card) {
    this.clicks += 1
      if (card.guessed == true || card.flipped == true) {
        alert("You've already clicked this card, silly")
      }
      else if (this.gameService.game.comparing == false) {
        document.getElementById('cardIMG' + card.id).setAttribute("src", card.imagePath)
        card.flipped = true
        this.gameService.game.comparing = true
        this.selectedCard = card
      }
      else if (this.gameService.game.comparing == true) {
        let card2 = this.selectedCard
        document.getElementById('cardIMG' + card.id).setAttribute("src", card.imagePath)
        card.flipped = true
        setTimeout(this.compareService.compareCard(card, card2), 10000)
        this.gameService.game.comparing = false
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
