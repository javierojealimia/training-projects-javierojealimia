import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from '../../core/utilities.service';
import { Project } from '../../model/project.model';
import { ProjectsService } from '../projects.service';

@Component( {
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
} )
export class NewProjectFormComponent implements OnInit {

  public newProjectForm: FormGroup;

  @Output() public projectEmitter = new EventEmitter<Project>();
  @Output() public cancelNewProject = new EventEmitter<boolean>();
  @Input() public classStatus: string;
  @Input() public savedProjectName: string;
  @Input() public canSave: boolean;

  constructor( private projectService: ProjectsService,
    private formBuilder: FormBuilder,
    private utilitiesService: UtilitiesService ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const minNameLenght = 5;
    const maxNameLenght = 200;
    this.newProjectForm = this.formBuilder.group( {
      name: ['', [Validators.required, Validators.minLength( minNameLenght ), Validators.maxLength( maxNameLenght )]]
    } );
  }

  public saveNewProject() {
    const newProject = {
      id: 0,
      name: ''
    }
    newProject.name = this.newProjectForm.controls['name'].value;
    this.projectService.saveProject( newProject ).subscribe( result => {
      this.canSaveControl();
      this.projectEmitter.emit( newProject );
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

  public cancelNewProjectControl() {
    this.buildForm();
    this.cancelNewProject.emit( false );
  }

  public getError( controlName: string ): string {
    return this.utilitiesService.getError( this.newProjectForm, controlName );
  }

}
