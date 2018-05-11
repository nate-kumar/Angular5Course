import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddPanelComponent } from './odd-panel/odd-panel.component';
import { EvenPanelComponent } from './even-panel/even-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddPanelComponent,
    EvenPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
