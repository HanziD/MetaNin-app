import { NgModule } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VerticalCardComponent } from './Explore/vertical.card.component';
import { footer } from './footer/footer.component';
import { header } from './header/topnavbar.component';
import { homepage } from './HomePage/HomePage.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateLayoutComponent } from './Create/CreateLayout.component';
import { ExploreLayoutComponent } from './Explore/ExploreLayout.component';
import { AboutLayoutComponent } from './About/AboutLayout.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { SignupComponent } from './SignUp/Signup.component';
import { WallOfFameComponent } from './WallOfFame/wall-of-fame.component';
import { KazekageVerticalCardComponent } from './WallOfFame/kazekage-vertical-card.component';


@NgModule({
  declarations: [
    AppComponent,
    header,
    footer,
    homepage,
    VerticalCardComponent,
    CreateLayoutComponent,
    ExploreLayoutComponent,
    AboutLayoutComponent,
    SignInComponent,
    SignupComponent,
    WallOfFameComponent,
    KazekageVerticalCardComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
