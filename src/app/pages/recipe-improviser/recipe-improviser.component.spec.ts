import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeImproviserComponent } from './recipe-improviser.component';

describe('RecipeImproviserComponent', () => {
  let component: RecipeImproviserComponent;
  let fixture: ComponentFixture<RecipeImproviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeImproviserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeImproviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
