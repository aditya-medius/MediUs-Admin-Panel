import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnemitiesComponent } from './anemities.component';

describe('AnemitiesComponent', () => {
  let component: AnemitiesComponent;
  let fixture: ComponentFixture<AnemitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnemitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnemitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
