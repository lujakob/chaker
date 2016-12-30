import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  group: FirebaseObjectObservable<any>;
  constructor(
          route: ActivatedRoute,
          af: AngularFire
  ) {
    route.params.forEach(params => {
      this.group = af.database.object('groups/' + params['id']);
    });
  }

  ngOnInit() {
  }

}
