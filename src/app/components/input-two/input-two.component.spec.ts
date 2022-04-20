import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTwoComponent } from './input-two.component';

describe('InputTwoComponent', () => {
  let component: InputTwoComponent;
  let fixture: ComponentFixture<InputTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
