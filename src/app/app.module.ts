import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { BananaComponent } from './banana/banana.component'
import { HomeComponent } from './home/home.component'
import { FooterComponent } from './footer/footer.component'
import { SapRmmCalculatorComponent } from './sap-rmm-calculator/sap-rmm-calculator.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BananaComponent,
    HomeComponent,
    FooterComponent,
    SapRmmCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }