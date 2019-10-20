import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fact-check',
  templateUrl: './fact-check.component.html',
  styleUrls: ['./fact-check.component.css']
})
export class FactCheckComponent implements OnInit {
  news: News;
  @Input() newsInput: News;

  ngOnInit() {
    this.news = this.newsInput;
  }
}
