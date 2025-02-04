import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadIpComponent } from './upload-ip/upload-ip.component';
import { LicenseIpComponent } from './license-ip/license-ip.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    { path: 'upload', component: UploadIpComponent },
    { path: 'license', component: LicenseIpComponent },
    { path: 'user-profile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }