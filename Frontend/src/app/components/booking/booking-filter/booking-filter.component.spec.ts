import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFilterComponent } from './booking-filter.component';

describe('BookingFilterComponent', () => {
  let component: BookingFilterComponent;
  let fixture: ComponentFixture<BookingFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingFilterComponent]
    });
    fixture = TestBed.createComponent(BookingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
