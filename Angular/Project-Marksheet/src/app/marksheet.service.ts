import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MarksheetService {
  
  constructor(private http:HttpClient) { }

  getAdmin(id:number,password:string){
    return this.http.get('http://localhost:8080/api/loginAdmin/'+id+'/'+password);
  }
}
