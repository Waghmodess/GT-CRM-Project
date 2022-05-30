import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})
export class DialogDataComponent implements OnInit {
  
    animal: string;
    name: string;

  constructor(  public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
