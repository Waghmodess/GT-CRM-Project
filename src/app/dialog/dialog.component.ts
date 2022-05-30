import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatSnackBar } from '@angular/material/snack-bar';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];



export interface DialogData {
  animal: string;
  name: string;
  // Rippers

}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  animal: string;
  name: string;
  @Input()
  vertical: boolean;

  // Tree
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.dataSource.data = TREE_DATA;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  // constructor(public dialog: MatDialog,
  //   public dialogRef: MatDialogRef<DialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }


  ngOnInit(): void {
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }


}
