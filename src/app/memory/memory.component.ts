import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  game = {}

  constructor(private gameService: GameService
  ) { }

  ngOnInit() {
    this.game = this.gameService.game
  }

}