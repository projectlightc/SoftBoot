import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatHaveWeDoComponent } from './what-have-we-do.component';

describe('WhatHaveWeDoComponent', () => {
  let component: WhatHaveWeDoComponent;
  let fixture: ComponentFixture<WhatHaveWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatHaveWeDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatHaveWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
