import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewprojectComponent } from './newproject/newproject.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './viewerproject/viewerproject.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'new',
        component: NewprojectComponent
      }
    ]
  },
  {
    path: 'project/:id',
    component: ViewerprojectComponent
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class ProjectsRoutingModule { }
