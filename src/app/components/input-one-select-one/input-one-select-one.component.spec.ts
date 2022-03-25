import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOneSelectOneComponent } from './input-one-select-one.component';

describe('InputOneSelectOneComponent', () => {
  let component: InputOneSelectOneComponent;
  let fixture: ComponentFixture<InputOneSelectOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOneSelectOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOneSelectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
