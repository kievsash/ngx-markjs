import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMarkjsComponent } from './ngx-markjs.component';

describe('NgxMarkjsComponent', () => {
  let component: NgxMarkjsComponent;
  let fixture: ComponentFixture<NgxMarkjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMarkjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMarkjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
