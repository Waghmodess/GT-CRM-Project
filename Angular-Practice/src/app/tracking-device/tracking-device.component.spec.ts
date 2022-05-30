import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingDeviceComponent } from './tracking-device.component';

describe('TrackingDeviceComponent', () => {
  let component: TrackingDeviceComponent;
  let fixture: ComponentFixture<TrackingDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
