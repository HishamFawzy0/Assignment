import { TestBed } from '@angular/core/testing';

import { DatafooterService } from './datafooter.service';

describe('DatafooterService', () => {
  let service: DatafooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
