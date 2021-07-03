import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { AddCourseComponent } from '../add-course/add-course.component'
import { WebapiService } from '../services/webapi.service';
@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss']
})
export class ManageCourseComponent implements OnInit {

  constructor(private generalService:GeneralService,  private webapiService:WebapiService) { }
  courses =[];
  ngOnInit(): void {
    this.webapiService.getCourses().subscribe((data)=>{

      this.courses = this.apiResponseHandle(data);
      console.log(data)
      console.log(this.courses)
    })
    //this.courses = this.webapiService.getCourses()
  }
  apiResponseHandle(data){
    let coursesFromApi = Object.keys(data).map(function(personNamedIndex){
        let person = data[personNamedIndex];
        // do something with person
        return person;
    });
    return coursesFromApi;
  }
  addCourseHandle(){
    this.generalService.openModal({data: null , component: AddCourseComponent})
  }

}
