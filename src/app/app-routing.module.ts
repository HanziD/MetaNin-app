import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateLayoutComponent } from './Create/CreateLayout.component';
import { homepage } from './HomePage/HomePage.component';
import { ExploreLayoutComponent } from './Explore/ExploreLayout.component';
import { AboutLayoutComponent } from './About/AboutLayout.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { SignupComponent } from './SignUp/Signup.component';
import { WallOfFameComponent } from './WallOfFame/wall-of-fame.component';

const routes: Routes = [
  {path: 'Create', component: CreateLayoutComponent},
  {path: 'MetaNin', component: homepage},
  {path: 'Explore', component: ExploreLayoutComponent},
  {path: 'About', component: AboutLayoutComponent},
  {path: 'Wall Of Fame', component: WallOfFameComponent},
  {path: 'Signin', component: SignInComponent},
  {path: 'Signup', component: SignupComponent},
  {path: '', redirectTo: 'Metanin', pathMatch: 'full'},

  

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
