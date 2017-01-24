import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { routing } from './app.routing';
import { TemplateDetailComponent } from './template-detail/template-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    TemplateDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
