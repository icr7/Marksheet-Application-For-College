import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarksheetService } from '../marksheet.service';
import { Student } from '../student';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})

export class RegistrationPageComponent implements OnInit {
  studentObj: Student = new Student();
  registrationForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private marksheetService: MarksheetService) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    this.studentObj.name = this.registrationForm.value.name;
    this.studentObj.password = this.registrationForm.value.password;
    this.marksheetService.registerNewStudent(this.studentObj).subscribe();
    this.submitted = true;
    console.log(this.studentObj)
  }

  ngOnInit(): void {
  }

}
