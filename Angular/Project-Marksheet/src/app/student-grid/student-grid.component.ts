import { Component, OnInit } from '@angular/core';
import { MarksheetService } from '../marksheet.service';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css']
})
export class StudentGridComponent implements OnInit {
  list;
  Loaded=false;
  
  constructor(private marksheetService: MarksheetService) {
    this.marksheetService.myList();
   }

  ngOnInit(): void { 
    this.list=this.marksheetService.myList();
    this.Loaded=true;
  }

  columnDefs = [
    { field: 'id', width: 40 },
    { field: 'name', width: 120 },
    { field: 'english', width: 80 },
    { field: 'hindi', width: 80 },
    { field: 'maths', width: 80 },
    { field: 'science', width: 80 },
    { field: 'sst', width: 80 }
  ];


  rowData = this.marksheetService.my2List()

  check() {
    console.log(this.marksheetService.myList());
  }


}
