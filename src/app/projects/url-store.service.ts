import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class UrlStoreService {

  private mensaje = '';
  private mensaje$ = new BehaviorSubject<string>( '' );

  constructor() { }

  public select$ = () => this.mensaje$.asObservable();

  public dispatch( mensaje: string ) {
    this.mensaje = mensaje;
    this.mensaje$.next( this.mensaje );
  }
}
