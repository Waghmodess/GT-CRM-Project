import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  // 1] Interpolution Binding.
  title: string = "Interpolution";
  interpolution: string = ' ';

  // 2] Property Binding.
  property: any = "This is Property Binding.";
  binding: string = "";
  disableText = true;
  link: any = "https://google.com/";

  // 3]Event Binding.
  event: any = "";

  // 4] Two Way Binding.
  twoway: any = "";
  constructor() { }

  ngOnInit(): void {
    // Interpolution Binding.
    this.interpolution = 'This is another way of data binding';

    // Property Binding.
    this.binding = "Sachin";
  }
  disabled() {
    this.disableText = false;
  }
  // Event Binding.
  onClick() {
    this.event = "This is Event Binding.";
    console.log("Welcome To Event Binding");
  }
  // onHide(){
  //   this.event.
  // }

}
