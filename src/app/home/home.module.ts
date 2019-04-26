import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
  providers: [ProjectsService]
} )
export class HomeModule { }
