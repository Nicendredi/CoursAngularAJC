import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personnesession1Component } from './personnesession1.component';

describe('Personnesession1Component', () => {
  let component: Personnesession1Component;
  let fixture: ComponentFixture<Personnesession1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Personnesession1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personnesession1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
