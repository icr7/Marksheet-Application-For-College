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
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  registerFunc() {
    this.register = this.r1;
    this.r1=!this.r1;
  }

  gridFunc() {
    this.grid = this.g1;
    this.g1=!this.g1;
  }

  homeFunc() {
    this.router.navigate(['/']);
  }

}
