import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpChatComponent } from './help-chat.component';

describe('HelpChatComponent', () => {
  let component: HelpChatComponent;
  let fixture: ComponentFixture<HelpChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpChatComponent]
    });
    fixture = TestBed.createComponent(HelpChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
