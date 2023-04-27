import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-anchor',
  templateUrl: './home-anchor.component.html',
  styleUrls: ['./home-anchor.component.css'],
})
export class HomeAnchorComponent {
  @Input() label: string = '';
  @Input() labelClassColor: string = '';
  @Input() image: string = '';
  @Input() borderClassColor: string = '';
  @Input() backgroundClassColor: string = '';
  @Input() link: string = '';
}
