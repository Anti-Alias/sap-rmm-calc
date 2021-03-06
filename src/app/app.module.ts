import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { HomeComponent } from './home/home.component'
import { FooterComponent } from './footer/footer.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubmitConfirmDialogComponent } from './submit-confirm-dialog/submit-confirm-dialog.component';
import { SapRmmCalculatorComponent } from './sap-rmm/sap-rmm-calculator/sap-rmm-calculator.component';
import { SapRmmConfirmComponent } from './sap-rmm/sap-rmm-confirm/sap-rmm-confirm.component';
import { AcknowledgeDialogComponent } from './acknowledge-dialog/acknowledge-dialog.component';
import { SapRmmDisplayComponent } from './sap-rmm/sap-rmm-display/sap-rmm-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    FooterComponent,
    SapRmmCalculatorComponent,
    PageNotFoundComponent,
    SubmitConfirmDialogComponent,
    SapRmmConfirmComponent,
    AcknowledgeDialogComponent,
    SapRmmDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
