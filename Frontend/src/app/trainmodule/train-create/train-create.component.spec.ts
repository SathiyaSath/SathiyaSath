import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCreateComponent } from './train-create.component';

describe('TrainCreateComponent', () => {
  let component: TrainCreateComponent;
  let fixture: ComponentFixture<TrainCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainCreateComponent]
    });
    fixture = TestBed.createComponent(TrainCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
