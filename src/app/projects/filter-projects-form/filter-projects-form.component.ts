import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from '../../core/utilities.service';
import { Project } from '../../model/project.model';

@Component( {
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
} )
export class FilterProjectsFormComponent implements OnInit {

  public findProjectForm: FormGroup
  @Output() findProjectEmitter = new EventEmitter<Project>();

  constructor( private formBuilder: FormBuilder,
    private utilitiesService: UtilitiesService ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const maxNameLenght = 200;
    this.findProjectForm = this.formBuilder.group( {
      id: ['', [this.validateId]],
      name: ['', [Validators.maxLength( maxNameLenght )]]
    } );
  }

  private validateId( control: AbstractControl ) {
    let error = null;
    if ( control.value != '' && !parseFloat( control.value ) ) {
      error = { ...error, number: 'El ID debe de ser numérico' };
    }
    return error;
  }

  public findProject() {
    let findProject: Project;
    findProject = {
      id: null,
      name: ''
    };
    findProject.id = this.findProjectForm.controls['id'].value;
    findProject.name = this.findProjectForm.controls['name'].value;
    this.findProjectEmitter.emit( findProject );
  }

  public cleanProject() {
    this.buildForm();
    let findProject: Project;
    findProject = {
      id: null,
      name: ''
    };
    this.findProjectEmitter.emit( findProject );
  }

}
