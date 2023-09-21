import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOfferComponent } from './flight-offer.component';

describe('FlightOfferComponent', () => {
  let component: FlightOfferComponent;
  let fixture: ComponentFixture<FlightOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightOfferComponent]
    });
    fixture = TestBed.createComponent(FlightOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
