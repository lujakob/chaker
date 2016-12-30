import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  public groupForm: FormGroup;
  constructor(
    private dialogRef: MdDialogRef<GroupFormComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.groupForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submitGroup() {
    if (this.groupForm.status === 'VALID') {
      this.dialogRef.close(this.groupForm.value);
    }
  }

}
