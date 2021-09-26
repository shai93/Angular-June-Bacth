import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TemplatedrivenComponent } from './forms/templatedriven/templatedriven.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TemplatedrivenComponent,
    ReactiveformsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
