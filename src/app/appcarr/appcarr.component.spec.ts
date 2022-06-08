import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcarrComponent } from './appcarr.component';

describe('AppcarrComponent', () => {
  let component: AppcarrComponent;
  let fixture: ComponentFixture<AppcarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcarrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppcarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
