import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSoftBoostComponent } from './section-soft-boost.component';

describe('SectionSoftBoostComponent', () => {
  let component: SectionSoftBoostComponent;
  let fixture: ComponentFixture<SectionSoftBoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSoftBoostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSoftBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
