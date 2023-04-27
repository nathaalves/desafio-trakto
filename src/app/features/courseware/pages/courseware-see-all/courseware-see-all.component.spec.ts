import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewareSeeAllComponent } from './courseware-see-all.component';

describe('CoursewareSeeAllComponent', () => {
  let component: CoursewareSeeAllComponent;
  let fixture: ComponentFixture<CoursewareSeeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursewareSeeAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursewareSeeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
