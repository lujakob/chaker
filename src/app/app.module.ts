import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AngularFireModule, AuthMethods, AuthProviders, FIREBASE_PROVIDERS, defaultFirebase } from "angularfire2";

import { AppComponent } from './app.component';
import { SessionComponent } from './components/session/session.component';
import { SessionFormComponent } from './components/session-form/session-form.component';

import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupFormComponent } from './components/group-form/group-form.component';

const firebaseConfig = {
  apiKey: "AIzaSyDxQ3XAVMbCkjuHTfSJ7-xwTay4-7Sap-Q",
  authDomain: "champ-tracker.firebaseapp.com",
  databaseURL: "https://champ-tracker.firebaseio.com",
  storageBucket: "champ-tracker.appspot.com",
  messagingSenderId: "1049374695185"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  { path: 'group', component: GroupListComponent },
  { path: 'group/:id', component: GroupDetailComponent },
  {
    path: 'session',
    component: SessionComponent,
    data: { title: 'Sessions List' }
  },
  { path: '',
    redirectTo: '/session',
    pathMatch: 'full'
  },
  { path: '**', component: SessionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    SessionFormComponent,
    GroupListComponent,
    GroupDetailComponent,
    GroupFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  entryComponents: [
    SessionFormComponent,
    GroupFormComponent
  ],
  providers: [
    FIREBASE_PROVIDERS,
    defaultFirebase(firebaseConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
