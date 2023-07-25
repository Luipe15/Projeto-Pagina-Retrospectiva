import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDentalComponent } from './sala-dental.component';

describe('SalaDentalComponent', () => {
  let component: SalaDentalComponent;
  let fixture: ComponentFixture<SalaDentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaDentalComponent]
    });
    fixture = TestBed.createComponent(SalaDentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
