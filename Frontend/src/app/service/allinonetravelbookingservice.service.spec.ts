import { TestBed } from '@angular/core/testing';

import { AllinonetravelbookingserviceService } from './allinonetravelbookingservice.service';

describe('AllinonetravelbookingserviceService', () => {
  let service: AllinonetravelbookingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllinonetravelbookingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
