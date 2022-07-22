import { Component, Input, } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { Subscription } from 'rxjs';
import { DataServiceService } from '../data-service.service';

export interface UserData {
  firstName: string;
  center: string;
  email: any;
  comment: string;
}

const ELEMENT_DATA: UserData[] = [
  { firstName: " ", center: " ", email: " ", comment: " " },
]

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})


export class MaterialTableComponent implements AfterViewInit {
  @Input() tableData: any;
  displayedColumns: string[] = ['firstName', 'center', 'email', 'comment'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  subscription: Subscription;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    console.log('Material Table Component', this.tableData)
    this.dataSource = new MatTableDataSource(this.tableData);

    // this.subscription = this.dataService.currentMessage.subscribe(message => this.tableData = message)
  }

  ngAfterViewInit() {
    // debugger;
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
