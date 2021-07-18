import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class MarksheetService {

  constructor(private http: HttpClient) { }

  getAdmin(id: number, password: string) {
    return this.http.get('http://localhost:8080/api/loginAdmin/' + id + '/' + password);
  }

  registerNewStudent(studentObj: Student) {
    return this.http.post('http://localhost:8080/api/newStudent', studentObj);
  }


}
