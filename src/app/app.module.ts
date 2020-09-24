import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDialogModule } from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { BananaComponent } from './banana/banana.component'
import { HomeComponent } from './home/home.component'
import { FooterComponent } from './footer/footer.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubmitConfirmDialogComponent } from './submit-confirm-dialog/submit-confirm-dialog.component';
import { SapRmmCalculatorComponent } from './sap-rmm/sap-rmm-calculator/sap-rmm-calculator.component';
import { SapRmmConfirmComponent } from './sap-rmm/sap-rmm-confirm/sap-rmm-confirm.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BananaComponent,
    HomeComponent,
    FooterComponent,
    SapRmmCalculatorComponent,
    PageNotFoundComponent,
    SubmitConfirmDialogComponent,
    SapRmmConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
