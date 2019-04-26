import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';

@Component( {
  selector: 'app-viewer-project-form',
  templateUrl: './viewer-project-form.component.html',
  styleUrls: ['./viewer-project-form.component.css']
} )
export class ViewerProjectFormComponent implements OnInit {

  @Input() public project: Project[];

  constructor() { }

  ngOnInit() {
  }

}
