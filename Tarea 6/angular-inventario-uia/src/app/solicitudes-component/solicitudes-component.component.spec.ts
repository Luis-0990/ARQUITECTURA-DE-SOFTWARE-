import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesComponentComponent } from './solicitudes-component.component';

describe('SolicitudesComponentComponent', () => {
  let component: SolicitudesComponentComponent;
  let fixture: ComponentFixture<SolicitudesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
