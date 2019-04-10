import { Component, OnInit } from '@angular/core';
import { environment } from '../../resources/enviroment/enviroment.resources';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  public numProjects: number;
  public counterClass: string;

  constructor() { }

  ngOnInit() {
    this.numProjects = environment.projects.length;

    if ( this.numProjects > 0 ) {
      this.counterClass = 'tag';
    } else {
      this.counterClass = 'tag secondary';
    }
  }

}
