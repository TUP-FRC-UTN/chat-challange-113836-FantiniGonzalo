import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuario2ControllerComponent } from './usuario2-controller.component';
import { CommonModule } from '@angular/common';

describe('Usuario2ControllerComponent', () => {
  let component: Usuario2ControllerComponent;
  let fixture: ComponentFixture<Usuario2ControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usuario2ControllerComponent,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usuario2ControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
