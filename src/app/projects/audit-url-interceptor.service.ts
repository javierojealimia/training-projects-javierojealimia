import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { UrlStoreService } from './url-store.service';

@Injectable()
export class AuditUrlInterceptorService implements HttpInterceptor {

  constructor( private urlStoreService: UrlStoreService ) { }

  public intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle( req ).pipe(
      filter( ( event: HttpEvent<any> ) => event instanceof HttpResponse ),
      tap( ( resp: HttpResponse<any> ) => this.auditEvent( resp, started ) ) );
  }

  private auditEvent( resp: HttpResponse<any>, started: number ) {
    const elapsedMs = Date.now() - started;
    const mensaje = 'Último mensaje recibido de ' + resp.url + ' en un tiempo de ' + elapsedMs + 'ms';
    this.urlStoreService.dispatch( mensaje );
    console.log( mensaje );
  }


}
