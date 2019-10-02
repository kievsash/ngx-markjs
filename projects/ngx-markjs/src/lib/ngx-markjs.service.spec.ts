import { TestBed } from '@angular/core/testing';

import { NgxMarkjsService } from './ngx-markjs.service';

describe('NgxMarkjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMarkjsService = TestBed.get(NgxMarkjsService);
    expect(service).toBeTruthy();
  });
});
