import { TestBed } from '@angular/core/testing';

import { MapInfoService } from './map-info.service';

describe('MapInfoService', () => {
  let service: MapInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
