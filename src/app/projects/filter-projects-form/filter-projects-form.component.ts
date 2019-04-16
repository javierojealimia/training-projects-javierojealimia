import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../../model/project.model';

@Component( {
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
} )
export class FilterProjectsFormComponent implements OnInit {

  public findProject: Project;
  @Output() findProjectEmitter = new EventEmitter<Project>();

  constructor() { }

  ngOnInit() {
    this.findProject = {
      id: null,
      name: ''
    };
  }

}
