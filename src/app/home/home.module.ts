import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuditUrlInterceptorService } from '../projects/audit-url-interceptor.service';
import { ProjectsService } from '../projects/projects.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule( {
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuditUrlInterceptorService,
      multi: true
    }]
} )
export class HomeModule { }
