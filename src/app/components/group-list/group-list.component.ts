import { Component, OnInit } from '@angular/core';
import { GroupFormComponent } from '../group-form/group-form.component';
import { MdDialog } from '@angular/material';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export type IGroup = {
  name: string;
  owner: string;
};

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  public groups: FirebaseListObservable<any>;
  constructor(
          public dialog: MdDialog,
          private af: AngularFire
  ) {
    this.groups = af.database.list('/groups');
  }

  ngOnInit() {
  }

  openAddGroup() {
    let dialogRef = this.dialog.open(GroupFormComponent);
    dialogRef.afterClosed().subscribe(group => {
      group.owner = this.af.auth.getAuth().uid;
      this.addItem(group);
    });
  }

  addItem(group: IGroup) {
    this.groups.push(group);
  }
}
