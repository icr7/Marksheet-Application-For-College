import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  register = false; r1 = true;
  grid = false; g1 = true;
  home = true;
  feeder=false;f1=true;
  gridRowData;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  registerFunc() {
    this.register = this.r1;
    this.r1=!this.r1;
    this.feeder=false
    this.f1=true
  }

  gridFunc() {
    this.grid = this.g1;
    this.g1=!this.g1;
  }
  feederFunc() {
    this.feeder = this.f1;
    this.f1=!this.f1;
    this.register=false;
    this.r1=true
  }
  feederFunc2(data) {
    this.feeder = true;
    this.register=false;
    this.gridRowData=data[0];
    console.log("gridRowData : "+this.gridRowData.name)
  }

  

  homeFunc() {
    this.router.navigate(['/']);
  }

  

}
