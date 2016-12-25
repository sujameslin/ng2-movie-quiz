import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdDialog } from '@angular/material';

import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';
import { GameComponent } from './game/game.component';
import { NameInputComponent } from './name-input/name-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    WelcomeDialogComponent,
    GameComponent,
    NameInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    //MdDialog
  ],
  entryComponents: [WelcomeDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public dialog: MdDialog) {
    // this.openDialog();
  }

  openDialog() {
    this.dialog.open(WelcomeDialogComponent);
  }
}
