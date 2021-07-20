import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class MarksheetService {
  list;
  constructor(private http: HttpClient) { }

  getAdmin(id: number, password: string) {
    return this.http.get('http://localhost:8080/api/loginAdmin/' + id + '/' + password);
  }
  getStudent(id: number, password: string) {
    return this.http.get('http://localhost:8080/api/loginStudent/' + id + '/' + password);
  }
  getAllStudent() {
    return this.http.get('http://localhost:8080/api/allStudent');
  }

  registerNewStudent(studentObj: Student) {
    return this.http.post('http://localhost:8080/api/newStudent', studentObj);
  }

  feedStudentMarks(feedObj: Student) {
    return this.http.put('http://localhost:8080/api/updateMarks/', feedObj);
  }

  myList() {
    this.getAllStudent()
      .subscribe(data => { this.list = data; }
      );

  }
  my2List() {
    return this.list;
  }
}
