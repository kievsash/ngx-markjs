import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ngx-markjs-demo';
  @ViewChild('search', {static: false}) searchElemRef: ElementRef;
  searchText$: Observable<string>;
  searchConfig = {separateWordSearch: false};

  ngAfterViewInit() {
    this.searchText$ = fromEvent(this.searchElemRef.nativeElement, 'keyup').pipe(
      map((e: Event) => (e.target as HTMLInputElement).value),
      debounceTime(300),
      distinctUntilChanged(),
      tap((text) => console.log('text ', text))
    );
  }
}
