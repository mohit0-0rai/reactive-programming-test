import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { SearchItem } from './models/search-item.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private loading = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;
  constructor(private itunes: SearchService) { }

  ngOnInit() {
      this.searchField = new FormControl();
      this.results = this.searchField.valueChanges
      .pipe(
            debounceTime(400),
            distinctUntilChanged(),
            tap( () => this.loading = true ),
            switchMap(term => this.itunes.search(term)),
            tap( () => this.loading = false )
            );
  }

  /*doSearch(term: string) {
    this.loading = true;
    this.results = this.itunes.search(term);
  }*/
}
