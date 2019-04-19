import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/projects.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  public numProjects: number;


  constructor( private projectService: ProjectsService ) { }

  ngOnInit() {
    this.numProjects = this.projectService.getNumberProjects( this.projectService.getProjects );
  }

  public counterClass(): string {
    return 'tag ' + this.getWarningNumProjects();
  }

  // tslint:disable-next-line: no-magic-numbers
  public getWarningNumProjects = () => this.projectService.getMaxProjects - this.projectService.getNumberProjects( this.projectService.getProjects ) > 10 ? 'primary' : 'secondary';

}
