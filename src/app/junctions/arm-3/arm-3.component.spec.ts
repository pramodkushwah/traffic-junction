import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arm3Component } from './arm-3.component';

describe('Arm3Component', () => {
  let component: Arm3Component;
  let fixture: ComponentFixture<Arm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
