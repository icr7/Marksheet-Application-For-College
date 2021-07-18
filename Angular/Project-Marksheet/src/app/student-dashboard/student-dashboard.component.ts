import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  studentData:string;
  obj;
  marks;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.obj=this.activatedRoute.params;
    this.marks=this.obj.value;
    console.log(this.obj.value)
  }

}
