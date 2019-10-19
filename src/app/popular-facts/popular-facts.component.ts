import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-facts',
  templateUrl: './popular-facts.component.html',
  styleUrls: ['./popular-facts.component.css']
})
export class PopularFactsComponent implements OnInit {
  constructor() {}

  news: any;
  @Input() newsInput;

  ngOnInit() {
    this.news = this.newsInput;
  }
  onScroll() {
    console.log('scrolled');
  }
}
