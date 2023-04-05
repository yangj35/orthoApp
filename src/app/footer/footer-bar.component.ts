import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-bar',
  templateUrl: './footer-bar.component.html'
})
export class FooterBarComponent implements OnInit {
  currentYear: number;

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
