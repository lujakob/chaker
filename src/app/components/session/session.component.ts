import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SessionFormComponent } from '../session-form/session-form.component';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

export type ISession = {
  time: string;
  userName: string;
};

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  public sessions: FirebaseListObservable<any>;

  @Input('user') user: any;

  constructor(
          public af: AngularFire,
          public dialog: MdDialog) {
    this.sessions = af.database.list('/sessions');
  }

  ngOnInit() {}


  openAddSession() {
    let dialogRef = this.dialog.open(SessionFormComponent);
    dialogRef.afterClosed().subscribe(session => {
      session.userName = this.user.auth.displayName;
      this.addItem(session);
    });
  }

  addItem(session: ISession) {
    this.sessions.push(session);
  }

  deleteAll() {
    this.sessions.remove();
  }

}
