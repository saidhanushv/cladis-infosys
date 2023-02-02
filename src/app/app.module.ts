import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreLandingComponent } from './components/landing/pre-landing/pre-landing.component';
import { IndexComponent } from './components/landing/index/index.component';
import { AnalysisLandingComponent } from './components/landing/analysis-landing/analysis-landing.component';
import { PredictionLandingComponent } from './components/landing/prediction-landing/prediction-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    PreLandingComponent,
    IndexComponent,
    AnalysisLandingComponent,
    PredictionLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
