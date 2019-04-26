import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
} )
export class NewProjectFormComponent implements OnInit {

  public newProjectString: string;
  public newProject: Project;
  public canSave: boolean;
  @Output() public projectEmitter = new EventEmitter<Project>();
  @Output() public cancelNewProject = new EventEmitter<boolean>();
  @Input() public classStatus: string;
  @Input() public savedProjectName: string;

  constructor( private projectService: ProjectsService ) {
    this.canSaveControl();
  }

  ngOnInit() {
    this.newProject = {
      id: 0,
      name: ''
    }
  }

  public saveNewProject() {
    this.newProject.name = this.newProjectString;
    this.projectService.saveProject( this.newProject ).subscribe( result => {
      this.canSaveControl();
      this.projectEmitter.emit( this.newProject );
      this.newProjectString = ''
    } );


  }

  public canSaveControl() {
    this.canSave = false;
    this.projectService.getProjects().subscribe( resultados => {
      if ( resultados == null || ( resultados != null && this.projectService.getMaxProjects() > resultados.length ) ) {
        this.canSave = true;
      }
    } );
  }

}
