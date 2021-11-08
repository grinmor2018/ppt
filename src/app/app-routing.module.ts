import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { Routes } from '@angular/router';


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
    path: 'rankings',
    component: RankingComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
