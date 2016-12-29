import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SessionFormComponent } from './components/session-form/session-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public formValue: string = '';

  constructor(public dialog: MdDialog) {}

  openAddSession() {
    let dialogRef = this.dialog.open(SessionFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.formValue = result.time;
    });
  }
}
