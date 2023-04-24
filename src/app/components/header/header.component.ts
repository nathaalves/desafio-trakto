import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public date: string;

  constructor() {
    const day =
      new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : new Date().getDate();
    const month =
      new Date().getMonth() < 10
        ? `0${new Date().getMonth()}`
        : new Date().getMonth();
    const year = new Date().getFullYear();
    this.date = `${day}/${month}/${year}`;
  }
}
