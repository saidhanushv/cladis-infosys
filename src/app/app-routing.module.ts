import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './MyComponents/landing/landing.component';
import { DockComponent } from './MyComponents/dock/dock.component';
import { PredictionLandingComponent } from './MyComponents/prediction-landing/prediction-landing.component';
import { AnalysisLandingComponent } from './MyComponents/analysis-landing/analysis-landing.component';



const routes: Routes = [
  {path :'', component: LandingComponent},
  {path: 'landing',component:DockComponent},
  {path: 'prediction-landing',component:PredictionLandingComponent},
  {path: 'analysis-landing',component:AnalysisLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
