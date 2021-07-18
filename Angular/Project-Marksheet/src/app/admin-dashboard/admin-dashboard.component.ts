import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksheetService } from '../marksheet.service';
import { Student } from '../student';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  register:boolean=false;
  grid=false;
  home=true;
  obj;
  abc:JSON;
  constructor(private router: Router,private marksheetService:MarksheetService) { }
  

  ngOnInit() {
    this.marksheetService.myList();

  }

  registerFunc(){
    this.register=true;
  
  }
  gridFunc(){
    this.grid=true;
    this.register=false;
  }
  homeFunc(){
    this.router.navigate(['/']);
  }
}
