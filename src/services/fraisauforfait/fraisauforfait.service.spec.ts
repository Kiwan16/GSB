import { TestBed } from '@angular/core/testing';

import { FraisauforfaitService } from './fraisauforfait.service';

describe('FraisauforfaitService', () => {
  let service: FraisauforfaitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraisauforfaitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
