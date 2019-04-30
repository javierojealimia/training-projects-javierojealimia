import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable( {
  providedIn: 'root'
} )
export class UtilitiesService {

  constructor() { }

  public getError( form: FormGroup, controlName: string ): string {
    let error = '';
    const control = form.get( controlName );
    if ( control.touched && control.errors != null ) {
      error = JSON.stringify( control.errors );
    }
    return error;
  }
}
