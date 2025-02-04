import { TestBed } from '@angular/core/testing';

import { UploadIpService } from './upload-ip.service';

describe('UploadIpService', () => {
  let service: UploadIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
