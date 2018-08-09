import { Component, OnInit, Input } from '@angular/core';
import { CardService } from './card.service';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() card: object;
disabled: boolean=false;

  constructor(private cardService: CardService,
              private gameService: GameService) { }

  ngOnInit() {
  }

  onClickCard(card) {
    if (this.gameService.game.compared == false){
      this.cardService.onClickCard(card)
    }
  }

}
