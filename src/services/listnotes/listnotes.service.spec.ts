import { TestBed } from '@angular/core/testing';

import { ListnotesService } from './listnotes.service';

describe('ListnotesService', () => {
  let service: ListnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
