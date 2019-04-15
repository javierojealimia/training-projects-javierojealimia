import { Component, OnInit } from '@angular/core';
import { environment } from '../../resources/enviroment/enviroment.resources';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {

  public projects: { id: number; name: string; }[];
  public formHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.projects = environment.projects;
    this.formHidden = false;
  }

  public showNewProject() {
    this.formHidden = true;
  }

  public hideNewProject() {
    this.formHidden = false;
  }

}
