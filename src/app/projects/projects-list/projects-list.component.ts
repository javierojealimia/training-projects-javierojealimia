import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../projects.service';
import { ProjectsListDataSource } from './projects-list-datasource';

@Component( {
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
} )
export class ProjectsListComponent implements OnInit {

  @Input() public projects: Project[];
  public projectSelectedVar: Project;
  public bandera: boolean;
  @Output() public projectDeleted = new EventEmitter<boolean>();

  public dataSource: ProjectsListDataSource;
  public displayedColumns = ['id', 'name', 'actions'];
  @ViewChild( MatPaginator ) paginator: MatPaginator;
  @ViewChild( MatSort ) sort: MatSort;

  constructor( private projectService: ProjectsService ) { }

  ngOnInit() {
    console.log( this.projects );
    this.dataSource = new ProjectsListDataSource( this.projects, this.paginator, this.sort );
  }

  public deleteProject( project: Project ) {
    this.projectService.deleteProject( project ).subscribe( result => {
      this.projectDeleted.emit( false );
    } );
  }

  public projectSelected( project: Project ) {
    this.projectSelectedVar = project;
  }

}
