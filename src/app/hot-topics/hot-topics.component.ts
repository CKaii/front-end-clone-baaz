import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-topics',
  templateUrl: './hot-topics.component.html',
  styleUrls: ['./hot-topics.component.css']
})
export class HotTopicsComponent implements OnInit {
  news: any;
  @Input() newsInput;

  ngOnInit() {
    this.news = this.newsInput;
  }
}
