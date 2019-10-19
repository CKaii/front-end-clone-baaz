import { Component, OnInit, Output } from '@angular/core';
import { News } from './news.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  news$: News[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getNews().subscribe(data => (this.news$ = data));
  }

  onScroll() {}
}
