import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public formNewHidden: boolean;

  constructor( private projectService: ProjectsService ) {
    this.projects = projectService.getProjects;
  }

  ngOnInit() {
    this.formNewHidden = false;
  }

  public showNewProject() {
    this.formNewHidden = true;
  }

  public hideNewProject() {
    this.formNewHidden = false;
  }

  public findProject( project: Project ) {
    this.projects = this.projectService.findProject( project );
  }

}
