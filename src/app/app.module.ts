import { NgModule } from '@angular/core';
import { FormControlDirective, FormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http'
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { AddCardComponent } from './Explore/addCard/add-card.component';

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
    UserInfoComponent,
    AuthenticationComponent,
    AddCardComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
