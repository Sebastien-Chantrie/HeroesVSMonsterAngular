import { TestBed } from '@angular/core/testing';

import { FightDataService } from './fight-data.service';

describe('FightDataService', () => {
  let service: FightDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
