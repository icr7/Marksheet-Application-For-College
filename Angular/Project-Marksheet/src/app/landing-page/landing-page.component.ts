import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  flag: number = 1;
  selectedAdmin=false; 
  selectedStudent=false;
  constructor() { }

  ngOnInit() {
    
  }

  onClick1() {
    this.flag = 1;
    this.selectedAdmin=true;
    this.selectedStudent=false;
  }

  onClick2() {
    this.flag = 2;
    this.selectedStudent=true;
    this.selectedAdmin=false;
  }



}
