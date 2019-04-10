import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../resources/enviroment/enviroment.resources';

@Component( {
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styleUrls: ['./viewerproject.component.css']
} )
export class ViewerprojectComponent implements OnInit {

  public project: { id: number; name: string; };
  public id: number;
  public route: ActivatedRoute;

  constructor( activateRoute: ActivatedRoute ) {
    this.route = activateRoute;
    // tslint:disable-next-line: triple-equals
    this.project = environment.projects.filter( c => c.id == this.id )[0];

  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      // tslint:disable-next-line: triple-equals
      this.project = environment.projects.filter( c => c.id == params['id'] )[0];
      console.log( this.id );
    } );
  }

}
