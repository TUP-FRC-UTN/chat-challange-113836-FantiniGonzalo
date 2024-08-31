import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatControllerComponent } from './chat-controller.component';
import { CommonModule } from '@angular/common';

describe('ChatControllerComponent', () => {
  let component: ChatControllerComponent;
  let fixture: ComponentFixture<ChatControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatControllerComponent,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
