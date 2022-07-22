import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss']
})
export class CrudFormComponent implements OnInit {
  
  submitted: boolean = false;
  addData: FormGroup;
  id: FormControl;
  userId: FormControl;
  title: FormControl;
  body: FormControl;

  constructor() { }


  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.userId = new FormControl('', [
      Validators.required,
    ]);

    this.id = new FormControl('', [
      Validators.required,
    ]);

    this.title = new FormControl('', [
      Validators.required,
    ]);

    this.body = new FormControl('', [
      Validators.required,
    ]);
  }

  createForm() {
    this.addData = new FormGroup({
      userId: this.userId,
      id: this.id,
      title: this.title,
      body: this.body
    })
  }
}
