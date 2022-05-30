import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  age = 30;
  showData: Boolean = false;
  data: any;
  course: any = ['ENGG', 'MCA', 'BCA', 'MBBS'];
  number: number = 2;
  myStyle: any = { 'color': 'black', 'font-size': '20px', 'background-color': 'yellow', 'border': '1px solid black' };
  constructor() { }

  ngOnInit(): void {
    if (this.age = 20) {
      this.data = "text"
    } else {
      this.data = "test"
    }
  }

}
