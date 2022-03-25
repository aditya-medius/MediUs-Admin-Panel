import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationsMappingComponent } from './specializations-mapping.component';

describe('SpecializationsMappingComponent', () => {
  let component: SpecializationsMappingComponent;
  let fixture: ComponentFixture<SpecializationsMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationsMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationsMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
