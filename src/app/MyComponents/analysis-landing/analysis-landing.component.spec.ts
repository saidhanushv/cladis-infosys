import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisLandingComponent } from './analysis-landing.component';

describe('AnalysisLandingComponent', () => {
  let component: AnalysisLandingComponent;
  let fixture: ComponentFixture<AnalysisLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
