import { Component, OnInit } from '@angular/core';
import { CardService } from '../memory-board/card/card.service';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html'
  /* styleUrls: ['./end-game.component.css'] */
})
export class EndGameComponent implements OnInit {

  constructor(private cardsService: CardService) { }

counter: number;

  ngOnInit() {
    this.counter = this.cardsService.clicks
  }

}
