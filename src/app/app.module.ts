import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { PersonalComponent } from './componentes/personal/personal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { E404Component } from './componentes/e404/e404.component';
import { MapaComponent } from './componentes/mapa/mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonalComponent,
    NosotrosComponent,
    E404Component,
    MapaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
