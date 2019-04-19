import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
} )
export class DashboardComponent implements OnInit {

  @Input() public projects: Project[];
  @Input() public getMaxProjects: number;

  constructor( private projectService: ProjectsService ) { }

  ngOnInit() {
  }

  public getNumProjects = () => this.projectService.getNumberProjects( this.projects );
  // tslint:disable-next-line: no-magic-numbers
  public getWarningNumProjects = () => this.getMaxProjects - this.getNumProjects() > 10 ? 'primary' : 'secondary';

}
