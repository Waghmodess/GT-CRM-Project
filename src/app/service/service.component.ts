import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from '../material-table/material-table.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource: MatTableDataSource<UserData>;
  userData: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.data().subscribe((res: any) => {
      // console.log(res);
      this.userData = new MatTableDataSource(res);
      this.userData.paginator = this.paginator;
    },
      (err) => {
        console.log(err);
        // this.service.handleError(err);
      });
  }

  ngAfterViewInit() {
    this.userData.paginator = this.paginator;
    this.userData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userData.filter = filterValue.trim().toLowerCase();

    if (this.userData.paginator) {
      this.userData.paginator.firstPage();
    }
  }
}