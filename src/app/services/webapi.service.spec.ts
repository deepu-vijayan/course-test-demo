import { TestBed } from '@angular/core/testing';

import { WebapiService } from './webapi.service';

import {  HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Courses, saveCourse } from '../data/testData';
describe('WebapiService', () => {
  let service: WebapiService, httpTestingModule: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
         WebapiService
      ]
    });
    service = TestBed.inject(WebapiService);
    httpTestingModule = TestBed.inject(HttpTestingController);

  });

  it('webapi service be created', () => {
    expect(service).toBeTruthy();
  });

  it('webapi getCourses function invoking', () => {
    service.getCourses().subscribe((courses) =>{
      expect(courses).toBeTruthy("Courses get from API");
    })
    const req = httpTestingModule.expectOne(service.BASEURL+'courses.json');
    expect(req.request.method).toEqual('GET');
    req.flush(Courses);
  });


  it('webapi getCourses function invoking', () => {
    service.addCourses(saveCourse).subscribe((courses) =>{
      expect(courses).toBeTruthy("Course save to backend");
    })
    const req = httpTestingModule.expectOne(service.BASEURL+'courses.json');
    expect(req.request.method).toEqual('POST');
    req.flush({name:"1"});
  });
});
