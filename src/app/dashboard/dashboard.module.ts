import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UploadIpComponent } from './upload-ip/upload-ip.component';
import { LicenseIpComponent } from './license-ip/license-ip.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UploadIpComponent,
    LicenseIpComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
