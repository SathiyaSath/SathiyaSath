import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtfBookhomeComponent } from './btf-bookhome.component';

describe('BtfBookhomeComponent', () => {
  let component: BtfBookhomeComponent;
  let fixture: ComponentFixture<BtfBookhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtfBookhomeComponent]
    });
    fixture = TestBed.createComponent(BtfBookhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
