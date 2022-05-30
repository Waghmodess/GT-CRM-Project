import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  title = "This is Pipe Tutorial.";
  salary = 50000;
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
