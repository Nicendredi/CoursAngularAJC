import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App7Component } from './app7.component';

describe('App7Component', () => {
  let component: App7Component;
  let fixture: ComponentFixture<App7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
