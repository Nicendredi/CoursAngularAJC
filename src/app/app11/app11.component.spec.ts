import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App11Component } from './app11.component';

describe('App11Component', () => {
  let component: App11Component;
  let fixture: ComponentFixture<App11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
