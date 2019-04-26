import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterProjectsFormComponent } from './filter-projects-form/filter-projects-form.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsService } from './projects.service';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './viewer-project-form/viewer-project-form.component';
import { ViewerprojectComponent } from './viewerproject/viewerproject.component';


@NgModule( {
  declarations: [ProjectsComponent, ViewerprojectComponent, NewprojectComponent, FilterProjectsFormComponent, ProjectsListComponent, ViewerProjectFormComponent, NewProjectFormComponent, DashboardComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProjectsService]
} )
export class ProjectsModule { }
