import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateLayoutComponent } from './Create/CreateLayout.component';
import { homepage } from './HomePage/HomePage.component';
import { ExploreLayoutComponent } from './Explore/ExploreLayout.component';
import { AboutLayoutComponent } from './About/AboutLayout.component';

const routes: Routes = [
  {path: 'Create', component: CreateLayoutComponent},
  {path: 'MetaNin', component: homepage},
  {path: 'Explore', component: ExploreLayoutComponent},
  {path: 'About', component: AboutLayoutComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
