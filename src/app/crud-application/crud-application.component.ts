import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-crud-application',
  templateUrl: './crud-application.component.html',
  styleUrls: ['./crud-application.component.scss']
})
export class CrudApplicationComponent implements OnInit {
  userList: string[] = [];
  submitted: boolean = false;
  login: FormGroup;
  centers = ['Pune', 'Mumbai', 'Bengaluru'];
  firstName: FormControl;
  center: FormControl;
  email: FormControl;
  comment: FormControl;
  // date: FormControl;
  // gender: FormControl;
  // genders = ['Male', 'Female'];
  // checkbox: FormControl;

  // List component
  stationaryMaterial: string[] = ['Notebook', 'Pen', 'Book', 'Pencile', 'Drafter'];
  stationary: FormControl;
  // Radio Button
  dept: FormControl;
  depts: string[] = ['Mech', 'IT', 'E&TC', 'Comp'];

  // Expansion pannel
  panelOpenState = false;

  // Progress Spinner
  showSpinner = false;

  //For No Past Date Picker
  minDate = new Date();
  // maxDate = new Date(2060, 5, 10)

  @Output() messageEvent = new EventEmitter<any>();
  constructor(private form: FormBuilder, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9 ]+$'),
    ]);

    this.center = new FormControl("", [
      Validators.required,
    ]);

    this.email = new FormControl("", [
      Validators.required,
      Validators.email,
    ]);

    this.comment = new FormControl("", [
      Validators.required,
    ]);

    // this.date = new FormControl("", [
    //   Validators.required,
    // ]);

    // this.gender = new FormControl("", [
    //   Validators.required,
    // ]);

    // this.checkbox = new FormControl("", [
    //   Validators.required,
    // ]);

    // this.dept = new FormControl("", [
    //   Validators.required,
    // ]);

    // this.stationary = new FormControl("", [
    //   Validators.required,
    // ]);
  }

  createForm() {
    this.login = new FormGroup({
      firstName: this.firstName,
      center: this.center,
      email: this.email,
      comment: this.comment,
      // date: this.date,
      // gender: this.gender,
      // checkbox: this.checkbox,
      // dept: this.dept,
      // stationary: this.stationary
    })
  }

  // To show data in console and then on UI in table form-
  onSubmit(myForm: any) {
    this.submitted = true;
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);
    if (this.login.valid) {
      console.log(this.login.value);
      this.messageEvent.emit(this.login.value);
      // this.userList.push(myForm.value);
      // myForm.value = '';
    } else {
      return;
    }
  }
  reset() {
    this.submitted = false;
    this.login.reset();
  }
}