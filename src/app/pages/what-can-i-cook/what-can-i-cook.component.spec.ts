import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCanICookComponent } from './what-can-i-cook.component';

describe('WhatCanICookComponent', () => {
  let component: WhatCanICookComponent;
  let fixture: ComponentFixture<WhatCanICookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatCanICookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatCanICookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
