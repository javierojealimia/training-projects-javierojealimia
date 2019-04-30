import { Component, OnInit } from '@angular/core';
import { UrlStoreService } from '../../../projects/url-store.service';

@Component( {
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
} )
export class FooterComponent implements OnInit {

  public mensaje$;

  constructor( private urlStoreService: UrlStoreService ) { }

  ngOnInit() {
    this.mensaje$ = this.urlStoreService.select$();
  }

}
