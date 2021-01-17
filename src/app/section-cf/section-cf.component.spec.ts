import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCFComponent } from './section-cf.component';

describe('SectionCFComponent', () => {
  let component: SectionCFComponent;
  let fixture: ComponentFixture<SectionCFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
