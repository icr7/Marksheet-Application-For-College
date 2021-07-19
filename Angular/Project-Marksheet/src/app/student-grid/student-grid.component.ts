import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css']
})

export class StudentGridComponent implements OnInit {

  columnDefs = [
    { field: 'id', width: 40 },
    { field: 'name', width: 120 },
    { field: 'english', width: 80 },
    { field: 'hindi', width: 80 },
    { field: 'maths', width: 80 },
    { field: 'science', width: 80 },
    { field: 'sst', width: 80 }
  ];

  rowData: Observable<any[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.rowData = this.http.get<any[]>('http://localhost:8080/api/allStudent')
  }


}
