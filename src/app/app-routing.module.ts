import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BananaComponent } from './banana/banana.component'
import { HomeComponent } from './home/home.component'
import { SapRmmCalculatorComponent } from './sap-rmm-calculator/sap-rmm-calculator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bananas', component: BananaComponent },
  { path: 'sap-rmm-calc', component: SapRmmCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
