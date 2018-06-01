import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Defining Your Routes here
const appRoutes : Routes = [
     { path:'home', component: HomeComponent},
     { path:'parcels', component: ParcelsComponent },
     { path:'', redirectTo:'/home', pathMatch: 'full'},
     { path:'**', component: PageNotFoundComponent}
    ]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
