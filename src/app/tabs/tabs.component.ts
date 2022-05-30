import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';

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

  // Add data by dialog
  openDialogg(): void {
    const dialogRef = this.dialog.open(DialogDataComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

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
