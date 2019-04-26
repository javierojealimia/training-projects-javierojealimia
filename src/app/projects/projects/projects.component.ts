import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {

  public projects$: Observable<Project[]>;
  public allProjects$: Observable<Project[]>;
  public formNewHidden: boolean;
  public getMaxProjects: number;

  constructor( private projectService: ProjectsService ) {

    this.refreshProjects( false );
    this.getMaxProjects = projectService.getMaxProjects();

  }

  ngOnInit() {

  }

  public newProjectViewControl( bandera: boolean ) {
    this.formNewHidden = bandera;
  }

  public findProject( project: Project ) {
    this.projects$ = this.projectService.findProject( project );
  }

  public saveProject( project: Project ) {
    this.projectService.saveProject( project ).subscribe( result => {
      return this.projects$ = this.projectService.getProjects();
    } );
  }

  public refreshProjects( bandera: boolean ) {
    this.projects$ = this.projectService.getProjects();
    this.allProjects$ = this.projectService.getProjects();
    this.newProjectViewControl( bandera );
  }

}
