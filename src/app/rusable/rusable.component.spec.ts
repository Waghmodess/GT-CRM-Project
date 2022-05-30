import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RusableComponent } from './rusable.component';

describe('RusableComponent', () => {
  let component: RusableComponent;
  let fixture: ComponentFixture<RusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RusableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
