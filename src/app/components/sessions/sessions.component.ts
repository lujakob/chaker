import { Component, OnInit } from '@angular/core';

interface ISession {
  time: string
}

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  public sessions: ISession[] = [];
  constructor() {

  }

  ngOnInit() {
    this.sessions = [{time: "20"}, {time: "30"}];
  }

}
