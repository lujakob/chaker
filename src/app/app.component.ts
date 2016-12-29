import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: Object = {};
  public userName: string = '';


  constructor(
    public af: AngularFire
  ) {


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


  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
