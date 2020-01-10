import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../models/search-item.model';
import { FormControl } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

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
  }}
