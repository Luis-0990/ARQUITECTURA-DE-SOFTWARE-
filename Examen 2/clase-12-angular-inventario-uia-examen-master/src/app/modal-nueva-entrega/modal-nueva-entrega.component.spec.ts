import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaEntregaComponent } from './modal-nueva-entrega.component';

describe('ModalNuevaEntregaComponent', () => {
  let component: ModalNuevaEntregaComponent;
  let fixture: ComponentFixture<ModalNuevaEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevaEntregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNuevaEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
