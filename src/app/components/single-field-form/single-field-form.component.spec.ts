import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFieldFormComponent } from './single-field-form.component';

describe('SingleFieldFormComponent', () => {
  let component: SingleFieldFormComponent;
  let fixture: ComponentFixture<SingleFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFieldFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
