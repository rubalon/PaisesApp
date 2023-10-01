import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaComponentComponent } from './prueba-component.component';

describe('PruebaComponentComponent', () => {
  let component: PruebaComponentComponent;
  let fixture: ComponentFixture<PruebaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaComponentComponent]
    });
    fixture = TestBed.createComponent(PruebaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
