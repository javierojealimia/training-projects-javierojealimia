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
  @Output() public projectEmitter = new EventEmitter<Project>();
  @Output() public cancelNewProject = new EventEmitter<boolean>();
  @Input() public classStatus: string;
  @Input() public savedProjectName: string;

  constructor( private projectService: ProjectsService ) { }

  ngOnInit() {
    this.newProject = {
      id: 0,
      name: ''
    }
  }

  public saveNewProject() {
    this.newProject.name = this.newProjectString;
    this.projectEmitter.emit( this.newProject );
  }

  public disabledSaveProjects(): boolean {
    return this.projectService.getMaxProjects <= this.projectService.getNumberProjects( this.projectService.getProjects );
  }

}
