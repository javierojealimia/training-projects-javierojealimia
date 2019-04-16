import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewprojectComponent } from './newproject/newproject.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './viewerproject/viewerproject.component';
import { FilterProjectsFormComponent } from './filter-projects-form/filter-projects-form.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ViewerProjectFormComponent } from './viewer-project-form/viewer-project-form.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';


@NgModule( {
  declarations: [ProjectsComponent, ViewerprojectComponent, NewprojectComponent, FilterProjectsFormComponent, ProjectsListComponent, ViewerProjectFormComponent, NewProjectFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
} )
export class ProjectsModule { }
