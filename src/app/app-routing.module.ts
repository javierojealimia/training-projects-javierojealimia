import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
