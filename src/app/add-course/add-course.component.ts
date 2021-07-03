import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { WebapiService } from '../services/webapi.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(private fb:FormBuilder, private webapiService:WebapiService) { }
  courseForm:any;
  ngOnInit(): void {
    this.courseForm = this.fb.group({
      name: [''],
      authorName: [''],
      contact: [''],
      noOfChapters:[''],
      createpublishedDated:[formatDate(new Date(), 'dd-MM-yyyy', 'en')]
    });
  }

  saveCourseHandle(){
    this.webapiService.addCourses(this.courseForm.value).subscribe(
      (data) => {
        console.log(data);
      }
    )
    console.log(this.courseForm);
  }
  cancelCourseHandle(){
    console.log('cancel')
  }

}
