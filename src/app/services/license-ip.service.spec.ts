import { TestBed } from '@angular/core/testing';

import { LicenseIpService } from './license-ip.service';

describe('LicenseIpService', () => {
  let service: LicenseIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
