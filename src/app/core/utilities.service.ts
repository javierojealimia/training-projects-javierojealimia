import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable( {
  providedIn: 'root'
} )
export class UtilitiesService {

  constructor() { }

  public getError( form: FormGroup, controlName: string ): ValidationErrors {
    const control = form.get( controlName );
    if ( control.touched && control.errors != null ) {
      return control.errors;
    }
    return null;
  }
}
