import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personnesession2Component } from './personnesession2.component';

describe('Personnesession2Component', () => {
  let component: Personnesession2Component;
  let fixture: ComponentFixture<Personnesession2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Personnesession2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personnesession2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
