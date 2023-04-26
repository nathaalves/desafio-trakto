import { Component, OnInit } from '@angular/core';
import { CoursewareService } from './courseware.service';
import { Courseware } from './courseware.model';
import { formatedDate } from 'src/utils/formatedDate';

@Component({
  selector: 'app-couseware',
  templateUrl: './courseware.component.html',
})
export class CoursewareComponent implements OnInit {
  courseware: Courseware[] = [];
  firstUpdatedDate = '';
  lastUpdatedDate = '';

  constructor(private coursewareService: CoursewareService) {}

  ngOnInit(): void {
    this.getCourseware();
  }

  private getCourseware() {
    this.coursewareService.fetchData().subscribe((res) => {
      this.courseware.push(...res.data);

      const firstDate = res.data[0].updatedAt;
      this.firstUpdatedDate = formatedDate(firstDate).substring(0, 5);

      const lastDate = res.data[res.data.length - 1].updatedAt;
      this.lastUpdatedDate = formatedDate(lastDate).substring(0, 5);
    });
  }
}
