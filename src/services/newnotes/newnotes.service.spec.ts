import { TestBed } from '@angular/core/testing';

import { NewnotesService } from './newnotes.service';

describe('NewnotesService', () => {
  let service: NewnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
