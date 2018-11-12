import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


// Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Material
import {MateriaModule} from './material';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { BarraComponent } from './proyectos/barra/barra.component'

@NgModule({
   declarations: [
      AppComponent,
      ProyectosComponent,
      LoginComponent,
      BarraComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MateriaModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
