import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
} )
export class ProjectsListComponent implements OnInit {

  @Input() public projects: Project[];
  public projectSelectedVar: Project;

  constructor( private projectService: ProjectsService ) { }

  ngOnInit() {
  }

  public deleteProject( project: Project ) {
    this.projectService.deleteProject( project );
  }

  public projectSelected( project: Project ) {
    console.log( project.id );
    this.projectSelectedVar = project;
  }

}
