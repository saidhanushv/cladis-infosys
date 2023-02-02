import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './MyComponents/landing/landing.component';
import { DockComponent } from './MyComponents/dock/dock.component';
import { PredictionLandingComponent } from './MyComponents/prediction-landing/prediction-landing.component';
import { AnalysisLandingComponent } from './MyComponents/analysis-landing/analysis-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DockComponent,
    PredictionLandingComponent,
    AnalysisLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
