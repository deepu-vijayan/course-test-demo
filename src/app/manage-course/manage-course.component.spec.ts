import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCourseComponent } from './manage-course.component';
import { AppModule } from '../app.module';
import { Courses } from '../data/testData'
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('ManageCourseComponent', () => {
  let component: ManageCourseComponent;
  let fixture: ComponentFixture<ManageCourseComponent>;
  let el:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ ManageCourseComponent ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(ManageCourseComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;

    });
  }));



  it('should create manage course component', () => {
    expect(component).toBeTruthy();
  });

  it('should get courses from api', () => {
    component.courses = component.apiResponseHandle(Courses);
    fixture.detectChanges();
    const panel = el.queryAll(By.css(".mat-expansion-panel"));
    expect(panel).toBeTruthy("could not find element with class mat-expansion-panel");
    expect(panel.length).toBe(2, "Didn't populate courses");
  });


  it('should get first course to a specific one', () => {
    component.courses = component.apiResponseHandle(Courses);
    fixture.detectChanges();
    const course = Courses['-McsKIV36QApy3-YEw0Z'];
    const panel = el.query(By.css(".mat-expansion-panel:first-child"));
    const name = panel.query(By.css("mat-panel-title"))
    expect(panel).toBeTruthy("could not find element with class mat-expansion-panel");
    expect(name.nativeElement.textContent.trim()).toBe(course.name);
  });
});
