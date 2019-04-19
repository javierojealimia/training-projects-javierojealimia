import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';

@Component( {
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
} )
export class ProjectsListComponent implements OnInit {

  @Input() public projects: Project[];

  constructor() { }

  ngOnInit() {
  }

}
