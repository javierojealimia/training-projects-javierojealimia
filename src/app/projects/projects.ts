import { Project } from '../model/project.model';

export interface Projects {

  getProjects: Project[];
  getMaxProjects: number;
  saveProject( project: Project );
  deleteProject( project: Project );
  findProject( project: Project ): Project[];
  getNumberProjects( project: Project[] ): number;
}
