import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MarksheetService } from '../marksheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  id: number;
  password: string;
  obj;
  status: string;
  submit: boolean;
  studentLoginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private marksheetService: MarksheetService) {
    this.studentLoginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.id = this.studentLoginForm.get('id').value;
    this.password = this.studentLoginForm.get('password').value;
    this.marksheetService.getStudent(this.id, this.password)
      .subscribe(data => { this.obj = data; 
    this.submit = true;
    if (!this.obj) { this.status = "invalid credentials" }
    else { this.status = null; this.gotoStudentdash(); }})
  }

  gotoStudentdash() {
    this.router.navigate(['/studentDash',this.obj]);
  }


}
