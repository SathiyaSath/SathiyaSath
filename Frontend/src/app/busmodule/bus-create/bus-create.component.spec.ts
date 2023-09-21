import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCreateComponent } from './bus-create.component';

describe('BusCreateComponent', () => {
  let component: BusCreateComponent;
  let fixture: ComponentFixture<BusCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusCreateComponent]
    });
    fixture = TestBed.createComponent(BusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
