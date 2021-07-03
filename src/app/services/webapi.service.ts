import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(private http:HttpClient) { }
  BASEURL = 'https://coursesapp-168e8-default-rtdb.firebaseio.com/';
  getCourses(){
    return this.http.get(this.BASEURL+'courses.json');

  }

  addCourses(data){
    return this.http.post(this.BASEURL+'courses.json',data)
  }
}
