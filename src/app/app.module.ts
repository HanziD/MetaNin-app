import { NgModule } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { footer } from './footer/footer.component';
import { header } from './header/topnavbar.component';
import { homepage } from './HomePage/HomePage.component';

@NgModule({
  declarations: [
    AppComponent,
    header,
    footer,
    homepage
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
