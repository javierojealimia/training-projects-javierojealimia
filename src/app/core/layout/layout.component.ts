import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component( {
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
} )
export class LayoutComponent implements OnInit {

  public title = environment.appName;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe( Breakpoints.Handset )
    .pipe(
      map( result => result.matches )
    );

  constructor( private breakpointObserver: BreakpointObserver ) { }

  ngOnInit() {
  }

}
