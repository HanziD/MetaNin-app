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

@NgModule({
  declarations: [
    AppComponent,
    header,
    footer,
    homepage,
    VerticalCardComponent,
    CreateLayoutComponent,
    ExploreLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
