import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import {
  WelcomeDialogComponent,
} from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  entryComponents: [WelcomeDialogComponent]
})
export class AppComponent {
  constructor(public dialog: MdDialog) {
    // this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(WelcomeDialogComponent);
  }
}
