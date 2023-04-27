import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() thumb: string = '';
  @Input() slideAmount: number = 0;
}
