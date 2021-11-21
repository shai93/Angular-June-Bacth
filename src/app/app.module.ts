import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TemplatedrivenComponent } from './forms/templatedriven/templatedriven.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentsComponent } from './departments/departments.component';
import { StudentsComponent } from './students/students.component';
import { AngularComponent } from './departments/angular/angular.component';
import { ReactComponent } from './departments/react/react.component';
import { AngularcoursesComponent } from './departments/angular/angularcourses/angularcourses.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TemplatedrivenComponent,
    ReactiveformsComponent,
    ChildComponent,
    DepartmentsComponent,
    StudentsComponent,
    AngularComponent,
    ReactComponent,
    AngularcoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
