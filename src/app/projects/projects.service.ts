
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Project } from '../model/project.model';
import { Projects } from './projects';

@Injectable()
export class ProjectsService implements Projects {

  private urlApi = environment.urlApi;
  private projects: Project[];
  public projectObserbable$: Observable<Project[]> = this.http.get<Project[]>( this.urlApi );

  constructor( private http: HttpClient ) { }

  public getMaxProjects(): number {
    return environment.maxProjects
  }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>( this.urlApi ).pipe( map( this.transformArray ) );
  }
  public findProjectById( id: number ): Observable<Project[]> {
    return this.http.get<Project[]>( this.urlApi )
      .pipe( map( this.transformArray ), map( results => {
        return results.filter( result => result.id == id )
      } ) );
  }

  public findProjectByName( name: string ): Observable<Project[]> {
    return this.http
      .get<Project[]>( this.urlApi )
      .pipe( map( this.transformArray ), map( results => {
        return results.filter( result => result.name.toUpperCase().includes( name.toUpperCase() ) )
      } ) );
  }

  public saveProject( project: Project ): Observable<any> {
    return this.http
      .post( this.urlApi, project );
  }

  public deleteProject( project: Project ): Observable<any> {
    const url = this.urlApi + '/' + project.id;
    return this.http.delete<Project>( url );
  }

  public findProject( project: Project ): Observable<Project[]> {
    if ( project.id != undefined && project.id != 0 ) {
      return this.findProjectById( project.id );
    } else if ( project.name != undefined && project.name != '' ) {
      return this.findProjectByName( project.name );
    }
    return this.getProjects();
  }

  private transformArray( ar: any[] ) {
    if ( ar != null ) {
      ar.forEach( fila => {
        fila['id'] = fila['_id'];
        delete fila['_id'];
      } );
    }
    return ar;
  }
}
