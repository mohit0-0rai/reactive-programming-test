import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private loading = false;
  private searchField: FormControl;
  constructor(private itunes: SearchService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.route.paramMap.subscribe( params => {
      if (params.get('term')) {
        this.loading = true;
        this.itunes.search(params.get('term')).subscribe( _ => this.loading = false );
      }
    });
    this.searchField.valueChanges
      .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map(term => this.router.navigate(['search', { term }])),
      ).subscribe();

  }

}
