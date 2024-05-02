import { TestBed } from '@angular/core/testing';

import { PlateauService } from './plateau2-d.service';

describe('Plateau2DService', () => {
  let service: PlateauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlateauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
