import { Component, OnInit } from '@angular/core';
import { formatedDate } from 'src/utils/formatedDate';
import { Courseware } from '../../courseware.model';
import { CoursewareService } from '../../courseware.service';

@Component({
  selector: 'app-courseware-home',
  templateUrl: './courseware-home.component.html',
  styleUrls: ['./courseware-home.component.css'],
})
export class CoursewareHomeComponent implements OnInit {
  courseware: Courseware[] = [];
  firstUpdatedDate = '';
  lastUpdatedDate = '';
  isFetching = false;

  constructor(private coursewareService: CoursewareService) {}

  ngOnInit(): void {
    this.getCourseware();
  }

  private getCourseware() {
    this.isFetching = true;
    this.coursewareService
      .fetchData({
        total_per_page: '10',
        order_by: 'updated_at',
        order_orientation: 'desc',
      })
      .subscribe((res) => {
        this.courseware.push(...res.data);

        const firstDate = res.data[0].updatedAt;
        this.firstUpdatedDate = formatedDate(firstDate).substring(0, 5);

        const lastDate = res.data[res.data.length - 1].updatedAt;
        this.lastUpdatedDate = formatedDate(lastDate).substring(0, 5);
        this.isFetching = false;
      });
  }
}
