import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuditUrlInterceptorService } from './audit-url-interceptor.service';
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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProjectsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuditUrlInterceptorService,
      multi: true
    }]
} )
export class ProjectsModule { }
