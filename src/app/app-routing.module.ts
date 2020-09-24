import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BananaComponent } from './banana/banana.component'
import { HomeComponent } from './home/home.component'
import { SapRmmCalculatorComponent } from './sap-rmm/sap-rmm-calculator/sap-rmm-calculator.component';
import { SapRmmConfirmComponent } from './sap-rmm/sap-rmm-confirm/sap-rmm-confirm.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bananas', component: BananaComponent },
  { path: 'sap-rmm-calc', component: SapRmmCalculatorComponent },
  { path: 'sap-rmm-confirm', component: SapRmmConfirmComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
