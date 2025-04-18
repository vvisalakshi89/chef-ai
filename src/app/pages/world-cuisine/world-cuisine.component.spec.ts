import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCuisineComponent } from './world-cuisine.component';

describe('WorldCuisineComponent', () => {
  let component: WorldCuisineComponent;
  let fixture: ComponentFixture<WorldCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldCuisineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
