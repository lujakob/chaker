import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { AngularFire, AuthProviders, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ISession } from './components/sessions/sessions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public formValue: string = '';
  public user: Object = {};
  public userName: string = '';
  public sessions: FirebaseListObservable<any>;

  constructor(
    public dialog: MdDialog,
    public af: AngularFire
  ) {
    this.sessions = af.database.list('/sessions');

    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        this.userName = user.auth.displayName;
        console.log(user);
      } else {
        // user not logged in
        this.user = {};
        this.userName = '';
      }
    });
  }

  openAddSession() {
    let dialogRef = this.dialog.open(SessionFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.formValue = result.time;
      this.addItem(result);
    });
  }

  addItem(session: ISession) {
    this.sessions.push({ time: session.time });
  }

  deleteAll() {
    this.sessions.remove();
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
