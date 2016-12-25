import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdDialog } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import {
  AppBarComponent,
  WelcomeDialogComponent,
  GameComponent,
  NameInputComponent
} from './components';

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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
