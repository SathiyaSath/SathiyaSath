import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmyTicketComponent } from './showmy-ticket.component';

describe('ShowmyTicketComponent', () => {
  let component: ShowmyTicketComponent;
  let fixture: ComponentFixture<ShowmyTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowmyTicketComponent]
    });
    fixture = TestBed.createComponent(ShowmyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
