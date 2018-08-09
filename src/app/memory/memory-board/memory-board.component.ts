import { Component, OnInit } from '@angular/core';
import { CardService } from '../memory-board/card/card.service'
import { CardModel } from '../memory-board/card/card.model'
import { GameService } from '../game.service';

@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.css']
})
export class MemoryBoardComponent implements OnInit {
  cards: object[]

  constructor(
    private cardService: CardService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.cards = this.cardService.cards
  }

}
