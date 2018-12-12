import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// This import is needed to perform HTML form related event functions and allowing to bind variables from ts files and html templates.
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// You import all the components here
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddCorpClientComponent } from './add-corp-client/add-corp-client.component';
import { ListAllCorpClientComponent } from './list-all-corp-client/list-all-corp-client.component';

// This import is needed for angular animations on browser
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// If you need to access the service, you need to import it first and then add it to the providers array below
// once these are added here, to use them , you need to import them in the individual component where you will
// use the service.
import { DataService } from './data.service';

// Here you add all the components that are part of this SPA (single page application)
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddCorpClientComponent,
    ListAllCorpClientComponent
  ],

  // all imports from angular get added here
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
