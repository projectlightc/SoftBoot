import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProccessComponent } from './section-proccess.component';

describe('SectionProccessComponent', () => {
  let component: SectionProccessComponent;
  let fixture: ComponentFixture<SectionProccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
