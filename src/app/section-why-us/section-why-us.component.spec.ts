import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhyUsComponent } from './section-why-us.component';

describe('SectionWhyUsComponent', () => {
  let component: SectionWhyUsComponent;
  let fixture: ComponentFixture<SectionWhyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWhyUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
