import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarksheetService } from '../marksheet.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  id: number;
  password: string;
  obj;
  cred:false;
  status:string;
  

  submit: boolean;
  constructor(private router: Router, private formBuilder: FormBuilder, private marksheetService: MarksheetService) {
    this.adminLoginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    this.submit = true;
    this.id = this.adminLoginForm.get('id').value;
    this.password = this.adminLoginForm.get('password').value;
    this.marksheetService.getAdmin(this.id, this.password).
      subscribe(data => { this.obj = data;
        if(!this.obj){this.status="invalid credentials"}
        else{this.status=null; this.gotoAdmindash();}
      });
  }

  gotoAdmindash(){
    this.router.navigate(['/adminDash']);
  }


}
