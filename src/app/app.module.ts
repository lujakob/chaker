import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AngularFireModule, AuthMethods, AuthProviders } from "angularfire2";

import { AppComponent } from './app.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { SessionFormComponent } from './components/session-form/session-form.component';

const firebaseConfig = {
  apiKey: "AIzaSyDxQ3XAVMbCkjuHTfSJ7-xwTay4-7Sap-Q",
  authDomain: "champ-tracker.firebaseapp.com",
  databaseURL: "https://champ-tracker.firebaseio.com",
  storageBucket: "champ-tracker.appspot.com",
  messagingSenderId: "1049374695185"
};

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    SessionFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  entryComponents: [
    SessionFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
