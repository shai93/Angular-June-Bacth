import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: 'department',
    component: DepartmentsComponent,
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
