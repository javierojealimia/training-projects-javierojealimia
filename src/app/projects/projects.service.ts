import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Project } from '../model/project.model';
import { Projects } from './projects';

@Injectable( {
  providedIn: 'root'
} )
export class ProjectsService implements Projects {

  public getProjects = environment.projects;

  public getMaxProjects = environment.maxProjects;
  // tslint:disable-next-line: triple-equals
  public findProjectById = ( id: number ) => environment.projects.filter( c => c.id == id );
  // tslint:disable-next-line: triple-equals
  public findProjectByName = ( name: string ) => environment.projects.filter( c => c.name.includes( name ) );

  public saveProject( project: Project ) {
    let maxId = 0;
    environment.projects.forEach( element => {
      if ( element.id > maxId ) {
        maxId = element.id;
      }
    } );

    project.id = maxId + 1;
    environment.projects.push( { ...project } );
  }

  public deleteProject( project: Project ) {
    environment.projects.splice( environment.projects.indexOf( project ), 1 );
  }

  public findProject( project: Project ): Project[] {
    // tslint:disable-next-line: triple-equals
    if ( project.id != undefined && project.id != 0 ) {
      return this.findProjectById( project.id );
      // tslint:disable-next-line: triple-equals
    } else if ( project.name != undefined && project.name != '' ) {
      return this.findProjectByName( project.name );
    }
    return environment.projects;
  }

  public getNumberProjects( projects: Project[] ): number {
    return projects.length;
  }

  constructor() { }
}
