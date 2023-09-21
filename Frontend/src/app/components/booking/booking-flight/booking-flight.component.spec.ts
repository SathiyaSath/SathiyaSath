import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFlightComponent } from './booking-flight.component';

describe('BookingFlightComponent', () => {
  let component: BookingFlightComponent;
  let fixture: ComponentFixture<BookingFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingFlightComponent]
    });
    fixture = TestBed.createComponent(BookingFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
