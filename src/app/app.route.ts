import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {Component, NgModule,} from '@angular/core'
import { AboutComponent } from './components/about/about.component';
import { HeoresComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {path: 'heroes', component:HeoresComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'buscar/:termino', component:BuscadorComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
    

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES); 