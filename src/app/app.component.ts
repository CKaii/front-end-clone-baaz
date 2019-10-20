import { Component, OnInit, Output, Input } from '@angular/core';
import { News } from './news.model';
import { DataService } from './data.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
Gets data from API endpoint and injects it to child components 
*/
export class AppComponent implements OnInit {
  @Output() news$: News[] = [];

  iter = 0;
  pageSize = 3;
  isLoaded = false;
  allNews$: News[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getNews().subscribe(data => {
      this.allNews$ = data;
      this.isLoaded = true;
      this.news$ = this.allNews$.slice(
        /* slices data to pieces that needs to displayed from allNews$ */
        this.iter,
        this.iter + this.pageSize
      );
      this.iter = this.iter + this.pageSize;
    });
  }

  /* Adds next pageSize from allNews$ to the news array*/
  updatePage() {
    this.news$ = this.allNews$
      .slice(this.iter, this.iter + this.pageSize)
      .concat(this.news$);

    this.allNews$
      .slice(this.iter, this.iter + this.pageSize)
      .concat(this.news$);

    this.iter = this.iter + this.pageSize;
  }

  /* Called when user scrolls through page and adds pageSize to allNews$*/
  onScroll() {
    if (this.isLoaded) {
      this.updatePage();
    } else {
      this.news$ = [];
    }
  }
}
