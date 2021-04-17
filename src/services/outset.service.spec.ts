import { TestBed } from '@angular/core/testing';

import { OutsetService } from './outset.service';

describe('OutsetService', () => {
  let service: OutsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
