import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchItem } from '../models/search-item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];

  constructor(private http: HttpClient) {
    this.results = [];
  }

  search(term: string): any {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL).pipe(map(res => {
        this.results = res['results'].map(item => {
            return new SearchItem(
                item['trackName'],
                item['artistName'],
                item['trackViewUrl'],
                item['artworkUrl30'],
                item['artistId']
            );
        });
    }));
  }
}
