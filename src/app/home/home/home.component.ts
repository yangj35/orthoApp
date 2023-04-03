import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentYear: number;

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
