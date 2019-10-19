import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://104.236.106.160/store/teststories';

  constructor(private _http: HttpClient) {}

  getNews() {
    return this._http.get<News[]>(this.apiUrl);
  }
}
