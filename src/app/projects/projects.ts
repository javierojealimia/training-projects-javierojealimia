import { Observable } from 'rxjs';
import { Project } from '../model/project.model';

export interface Projects {

  getMaxProjects(): number;
  getProjects(): Observable<Project[]>;
  saveProject( project: Project ): Observable<any>;
  deleteProject( project: Project ): Observable<any>;
  findProject( project: Project ): Observable<Project[]>;
}

