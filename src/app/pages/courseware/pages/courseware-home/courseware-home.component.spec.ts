import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursewareHomeComponent } from './courseware-home.component';

describe('CoursewareHomeComponent', () => {
  let component: CoursewareHomeComponent;
  let fixture: ComponentFixture<CoursewareHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursewareHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursewareHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
