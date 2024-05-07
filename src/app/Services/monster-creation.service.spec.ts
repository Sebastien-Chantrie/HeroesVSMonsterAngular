import { TestBed } from '@angular/core/testing';

import { MonsterCreationService } from './monster-creation.service';

describe('MonsterCreationService', () => {
  let service: MonsterCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
