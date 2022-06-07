import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1aComponent } from './comp1a.component';

describe('Comp1aComponent', () => {
  let component: Comp1aComponent;
  let fixture: ComponentFixture<Comp1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp1aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
