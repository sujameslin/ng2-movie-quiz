import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdDialog } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import {
  AppBarComponent,
  WelcomeDialogComponent,
  GameComponent,
  ActorInputComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    WelcomeDialogComponent,
    GameComponent,
    ActorInputComponent
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
  bootstrap: [AppComponent]
})
export class AppModule {}
