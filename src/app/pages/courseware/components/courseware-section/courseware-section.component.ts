import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-courseware-section',
  templateUrl: './courseware-section.component.html',
  styleUrls: ['./courseware-section.component.css'],
})
export class CoursewareSectionComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('coursesContainer') coursesContainer!: ElementRef<HTMLDivElement>;
  scrollPosition = 0;

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttonColor: string = '';
  @Input() firstUpdatedDate = '';
  @Input() lastUpdatedDate = '';

  scrollLeft() {
    const scrollContainerWidth = this.scrollContainer.nativeElement.offsetWidth;
    this.scrollPosition -= scrollContainerWidth;
    this.scrollContainer.nativeElement.scrollTo({
      left: this.scrollPosition,
    });

    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    }
  }

  scrollRight() {
    const coursesContainerWidth =
      this.coursesContainer.nativeElement.offsetWidth;
    const scrollContainerWidth = this.scrollContainer.nativeElement.offsetWidth;
    this.scrollPosition += scrollContainerWidth;
    this.scrollContainer.nativeElement.scrollTo({
      left: this.scrollPosition,
    });

    if (this.scrollPosition > coursesContainerWidth) {
      this.scrollPosition = coursesContainerWidth;
    }
  }
}
