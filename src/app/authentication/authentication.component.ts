import { Component } from '@angular/core';
import {
  ExtendedGetResult,
  FingerprintjsProAngularService,
  GetResult,
} from '@fingerprintjs/fingerprintjs-pro-angular'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  constructor(
    private fingerprintService: FingerprintjsProAngularService
  ) {}

  visitorId = 'Press "Identify" button to get visitorId'
  extendedResult: null | ExtendedGetResult | GetResult = null

  async onIdentifyButtonClick(): Promise<void> {
    const data = await this.fingerprintService.getVisitorData()
    console.log(data)
    this.visitorId = data.visitorId
    this.extendedResult = data
  }
}
