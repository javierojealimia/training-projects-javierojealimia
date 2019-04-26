import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
} )
export class DashboardComponent implements OnInit {

  @Input() public projects: number;
  @Input() public getMaxProjects: number;

  constructor( private projectService: ProjectsService ) { }

  ngOnInit() {
  }

  public getNumProjects = () => this.projects;
  // tslint:disable-next-line: no-magic-numbers
  public getWarningNumProjects = () => this.getMaxProjects - this.getNumProjects() > 10 ? 'primary' : 'secondary';

}
