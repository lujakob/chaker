import { Component, Inject } from '@angular/core';
import { AngularFire, AuthProviders, FirebaseRef } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: Object = {};
  public userName: string = '';


  constructor(
    private af: AngularFire,
    @Inject(FirebaseRef) fb
  ) {

    var fbRef = fb.database().ref();


    fbRef.on('value', snapshot => console.log(snapshot.val()));

    var isNewUser = true;

    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
        this.userName = user.auth.displayName;

        fbRef.child('users').orderByChild('email').equalTo(user.auth.email).once('value', (snap) => {

          if (!snap.val()) {
            let newUser = {
              uid: user.auth.uid,
              displayName: user.auth.displayName,
              email: user.auth.email
            };
            this.af.database.list('/users').push(newUser);
          }
        });

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
