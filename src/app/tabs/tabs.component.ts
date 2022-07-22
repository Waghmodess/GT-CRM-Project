import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  message: any;

  animal: string;
  name: string;
  
  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  myTabSelectedTabChange(event: any) {
 
  }

  receiveMessage($event: any) {
    this.message = $event;
    console.log(this.message);
  }

  openDialog() {
    this.dialog.open(DialogComponent,{ width: '600px' });
  }

}
