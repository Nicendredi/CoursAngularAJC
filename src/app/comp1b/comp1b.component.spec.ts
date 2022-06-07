import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1bComponent } from './comp1b.component';

describe('Comp1bComponent', () => {
  let component: Comp1bComponent;
  let fixture: ComponentFixture<Comp1bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp1bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
