import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
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
    const maxNameLenght = environment.maxNameLenght;
    this.findProjectForm = this.formBuilder.group( {
      id: ['', [this.validateId]],
      name: ['', [Validators.maxLength( maxNameLenght )]]
    } );
  }

  private validateId( control: AbstractControl ) {
    let error = null;
    if ( control.value != '' && !parseFloat( control.value ) ) {
      error = { ...error, validateid: 'El ID debe de ser numérico' };
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

  public getError( controlName: string ): string {
    const errores = this.utilitiesService.getError( this.findProjectForm, controlName );
    let stringError = '';
    if ( errores != null ) {
      Object.keys( errores ).forEach( keyError => {
        if ( keyError == 'validateid' ) {
          stringError = stringError + errores[keyError];
        } else if ( keyError == 'minlength' ) {
          stringError = stringError + ' El nombre del proyecto debe tener al menos ' + environment.minNameLenght + ' caráteres';
        } else if ( keyError == 'maxlength' ) {
          stringError = stringError + ' El nombre del proyecto no puede tener más de ' + environment.maxNameLenght + ' carácteres';
        }
        console.log( 'Key control: ' + controlName + ', keyError: ' + keyError + ', err value: ', errores[keyError] );
      } );
    }
    return stringError;
  }

}
