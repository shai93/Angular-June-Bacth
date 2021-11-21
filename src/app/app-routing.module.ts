import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './departments/angular/angular.component';
import { AngularcoursesComponent } from './departments/angular/angularcourses/angularcourses.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ReactComponent } from './departments/react/react.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: 'department',
    component: DepartmentsComponent,
    children: [
      {
        path: 'angular', //deparment/angular
        component: AngularComponent,
        children: [
          {
            path: ':id',
            component: AngularcoursesComponent,
          },
        ],
      },
      {
        path: 'react', //department/react
        component: ReactComponent,
      },
    ],
  },
  {
    path: 'student',
    component: StudentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
