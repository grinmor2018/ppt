import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';


export const Approutes: Routes = [
	/* { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, */
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
