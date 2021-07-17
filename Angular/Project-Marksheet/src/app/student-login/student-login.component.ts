import { Component, OnInit,AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Admin } from '../Admin';
import { MarksheetService } from '../marksheet.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  adminLoginForm: FormGroup;
  id: number;
  password: string;
  obj;
  adm:Admin=new Admin();
  name:string;
  submit: boolean;
  constructor(private formBuilder: FormBuilder, private marksheetService: MarksheetService) {
    this.adminLoginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(){ if(this.submit){this.jet()}
  }

  onSubmit() {
    this.id = this.adminLoginForm.get('id').value;
    this.password = this.adminLoginForm.get('password').value;
    this.get();
    this.submit=true;
  }

  get() {
    this.marksheetService.getAdmin(this.id, this.password).
      subscribe(data => { this.obj = data;this.adm=this.obj})
      }

jet(){
  console.log(this.adm.email)
}

}
