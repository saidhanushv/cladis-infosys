import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionLandingComponent } from './prediction-landing.component';

describe('PredictionLandingComponent', () => {
  let component: PredictionLandingComponent;
  let fixture: ComponentFixture<PredictionLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
