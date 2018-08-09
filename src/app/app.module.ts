import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardModel } from './memory/memory-board/card/card.model'
import { CardService } from './memory/memory-board/card/card.service'

import { AppComponent } from './app.component';
import { MemoryComponent } from './memory/memory.component';
import { CardComponent } from './memory/memory-board/card/card.component';
import { HeaderComponent } from './header/header.component';
import { StartGameComponent } from './memory/start-game/start-game.component';
import { MemoryBoardComponent } from './memory/memory-board/memory-board.component';
import { TimerComponent } from './memory/timer/timer.component';
import { EndGameComponent } from './memory/end-game/end-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryComponent,
    CardComponent,
    HeaderComponent,
    StartGameComponent,
    MemoryBoardComponent,
    TimerComponent,
    EndGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
