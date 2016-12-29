import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

  public sessionForm: FormGroup;
  constructor(
    private dialogRef: MdDialogRef<SessionFormComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.sessionForm = this.formBuilder.group({
      time: ['', Validators.required]
    });
    console.log(this.sessionForm);
  }

  submitSession() {
    if (this.sessionForm.status === 'VALID') {
      this.dialogRef.close(this.sessionForm.value)
    }
  }

}
