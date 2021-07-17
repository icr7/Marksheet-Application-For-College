import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  register:boolean=false;
  grid=false;
  home=true;
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  registerFunc(){
    this.register=true;
    this.grid=false;
  }
  gridFunc(){
    this.grid=true;
    this.register=false;
  }
  homeFunc(){
    this.router.navigate(['/']);
  }
}
