import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-device',
  templateUrl: './tracking-device.component.html',
  styleUrls: ['./tracking-device.component.scss']
})
export class TrackingDeviceComponent implements OnInit {
  centers = ['Pune', 'Mumbai', 'Bengaluru'];

  constructor() { }

  ngOnInit(): void {
  }

}
