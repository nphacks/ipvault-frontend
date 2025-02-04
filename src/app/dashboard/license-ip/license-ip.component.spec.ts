import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseIpComponent } from './license-ip.component';

describe('LicenseIpComponent', () => {
  let component: LicenseIpComponent;
  let fixture: ComponentFixture<LicenseIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseIpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LicenseIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
