import { Project } from '../model/project.model';

export interface Projects {

  getProjects: Project[];
  saveProject( project: Project );
  deleteProject( project: Project );
  findProject( project: Project ): Project[];
}
