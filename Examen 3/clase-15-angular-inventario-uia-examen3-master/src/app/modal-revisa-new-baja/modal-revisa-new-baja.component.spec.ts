import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRevisaNewBajaComponent } from './modal-revisa-new-baja.component';

describe('ModalRevisaNewBajaComponent', () => {
  let component: ModalRevisaNewBajaComponent;
  let fixture: ComponentFixture<ModalRevisaNewBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRevisaNewBajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRevisaNewBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
