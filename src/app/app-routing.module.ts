import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// This is the file where you setup the routes to each components
// You will need to import all the components and their ts files here
// The importing object (Eg HomeComponent & AboutComponent) have to be as defined in the files.
import { HomeComponent } from  './home/home.component';
import { AboutComponent } from  './about/about.component';

// this becomes the routing array which takes objects with path and component as variables
const routes: Routes = 
[
    // these are objects defined with 2 variables, path and component
    { 
        path: '',
        component: HomeComponent
    },
    { 
        path: 'about/:id/:name',
        component: AboutComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
