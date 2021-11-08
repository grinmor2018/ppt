import { Component, OnInit } from '@angular/core';
import { GameService } from './../../services/game.service';
import { HomeService } from './../../services/home.service';
import { Player } from '../../../app/models/player.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  players : Player[]= [];
  editOrdre: string="";
  List: Player[]= [];

  constructor(
    private homeService: HomeService,
    private gameService: GameService
  ) {
    this.players = this.homeService.getPlayers();
    this.players.sort((a, b) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0);
  }

  ngOnInit() {
    this.homeService.scrollTop();
  }

  back(){
    this.gameService.back();
  }


}
