import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
} )
export class NewprojectComponent implements OnInit {

  public newproject: Project;
  public savedProjectName: string;
  public classStatus: string;
  @Output() public hideNewForm = new EventEmitter<boolean>();
  @Output() public savedProjectEmitter = new EventEmitter<boolean>();

  constructor( private projectService: ProjectsService ) {
  }

  ngOnInit() {
    this.newproject = {
      id: 0,
      name: ''
    }
    this.classStatus = 'container card hidden';
  }

  public saveProject( project: Project ) {
    this.savedProjectEmitter.emit( true );
    this.savedProjectName = this.newproject.name;
    this.classStatus = 'container card';

  }

  public hiddenNewForm( bandera: boolean ) {
    this.hideNewForm.emit( bandera );
  }

}
