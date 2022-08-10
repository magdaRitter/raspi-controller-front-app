import { TestBed } from '@angular/core/testing';

import { RaspiService } from './raspi.service';

describe('RaspiService', () => {
  let service: RaspiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaspiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
