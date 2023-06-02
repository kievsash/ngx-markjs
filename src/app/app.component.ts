import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {fromEvent, Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ngx-markjs-demo';
  @ViewChild('search', {static: false}) searchElemRef: ElementRef | undefined;
  searchText$: Observable<string | null> = of(null);
  searchConfig = {separateWordSearch: false};

  ngAfterViewInit() {
    this.searchText$ = fromEvent<Event>(this.searchElemRef?.nativeElement, 'keyup').pipe(
      map((e: Event) => (e.target as HTMLInputElement).value),
      debounceTime(300),
      distinctUntilChanged()
    );
  }
}
