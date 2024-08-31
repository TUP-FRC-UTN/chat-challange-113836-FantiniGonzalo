import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuario1ControllerComponent } from './usuario1-controller.component';
import { CommonModule } from '@angular/common';

describe('Usuario1ControllerComponent', () => {
  let component: Usuario1ControllerComponent;
  let fixture: ComponentFixture<Usuario1ControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usuario1ControllerComponent,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usuario1ControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
