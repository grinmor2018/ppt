import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PlayComponent } from './components/play/play.component';


export const Approutes: Routes = [
	{ path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'play',
    component: PlayComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];
