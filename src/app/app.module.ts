import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientXsrfModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
