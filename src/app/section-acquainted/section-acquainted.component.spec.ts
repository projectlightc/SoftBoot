import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAcquaintedComponent } from './section-acquainted.component';

describe('SectionAcquaintedComponent', () => {
  let component: SectionAcquaintedComponent;
  let fixture: ComponentFixture<SectionAcquaintedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAcquaintedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAcquaintedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
