import { Component, OnInit, Input } from '@angular/core';

export type ISession = {
  time: string;
};

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  @Input('sessions') sessions: ISession[] = [];
  constructor() {}

  ngOnInit() {}

}
