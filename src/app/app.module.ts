import { BrowserModule } from '@angular/platform-browser';


  import {MegaMenuModule} from 'primeng/megamenu';
  import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    ProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
