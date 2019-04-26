import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styleUrls: ['./viewerproject.component.css']
} )
export class ViewerprojectComponent implements OnInit {

  public project$: Observable<Project[]>;

  constructor( private activateRoute: ActivatedRoute, private projectService: ProjectsService ) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      // tslint:disable-next-line: triple-equals
      this.project$ = this.projectService.findProjectById( params['id'] );
    } );
  }

}
