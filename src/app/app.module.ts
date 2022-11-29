import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';

const myRoute:Routes=[
  {
    path:"",
    component:NavBarComponent
  },
  {
    path:"view",
    component:ViewPhotoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ViewPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
