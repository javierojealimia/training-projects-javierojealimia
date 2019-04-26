import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../../projects/projects.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  public numProjects: number;
  public projects$: Observable<Project[]>;
  private warningProjects: string;

  constructor( private projectService: ProjectsService ) {
    this.warningProjects = 'primary';
  }

  ngOnInit() {
    this.projects$ = this.projectService.getProjects().pipe( map( resultados => {
      if ( resultados != null && this.projectService.getMaxProjects() - resultados.length < 10 ) {
        this.warningProjects = 'secondary';
      }
      return resultados;
    } ) );
  }

  public counterClass(): string {
    return 'tag ' + this.warningProjects;
  }
}
