import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../../model/project.model';
import { environment } from '../../resources/enviroment/enviroment.resources';

@Component( {
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
} )
export class NewprojectComponent implements OnInit {

  public newproject: Project;
  public savedProjectName: string;
  public classStatus: string;
  @Output() public hideNewForm = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.newproject = {
      id: 0,
      name: ''
    }
    this.classStatus = 'container card hidden';
  }

  public saveProject() {
    let maxId = 0;
    environment.projects.forEach( element => {
      if ( element.id > maxId ) {
        maxId = element.id;
      }
    } );

    this.newproject.id = maxId + 1;
    environment.projects.push( { ...this.newproject } );
    this.savedProjectName = this.newproject.name;
    this.newproject.name = '';
    this.classStatus = 'container card';
  }

}
