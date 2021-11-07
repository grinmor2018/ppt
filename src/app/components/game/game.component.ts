import { Bet, Bets } from '../../../app/models/bets-enum';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../app/services/game.service';
import { HomeService } from '../../services/home.service';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  username: string = "";
  player!: Player;
  myBet: Bet= Bet.Paper;
  myLastBet!: Bet;
  yourBet: Bet = Bet.Paper;
  points: number = 0;
  begin: boolean = false;
  beginI : boolean = false;
  win : boolean = false;
  tied: boolean = false;

  constructor(
    private gameService: GameService,
    private homeService: HomeService
  ) {
    this.reset();
  }

  ngOnInit() {
  }

  back(){
    this.gameService.back();
  }

  async bet(bet: number): Promise<Bet>{
    this.win = false;
    this.tied = false;
    this.begin= true;
    this.yourBet= Bets[bet-1];
    this.disabledButtons();
    setTimeout(async () => {await this.bot()},1000);
    return this.yourBet
  }

  async bot(){
    this.beginI = true;
    this.myLastBet = this.myBet;
    let bet = this.gameService.random(1,3);
    this.myBet = Bets[bet-1];
    if(this.myBet !== this.myLastBet){
      let win = await this.gameService.checkResult(this.myBet,this.yourBet);
      if (win===3){
        this.win = true;
        this.tied = false;
        this.points = this.points + 1;
        this.player.score = this.points;
        this.gameService.updateUser(this.player,this.points);
      } else if (win===1){
        this.win= false;
        this.tied= true;
      }  else  {
        this.win= false;
        this.tied = false;
      }
      setTimeout(() => {this.beginI = false;this.enableButtons();},1000);
    } else {
      await this.bot();
    }
  }
  disabledButtons(){
    for (let i=1;i<4;i++){
      let tag= 'bet'+i;
      let doc = document.getElementById(tag);
      doc?.setAttribute("disabled", "disabled");
    }
  }
  enableButtons(){
    for (let i=1;i<4;i++){
      let tag= 'bet'+i;
      let doc = document.getElementById(tag);
      doc?.removeAttribute("disabled");
    }
  }

  async reset(){
    this.player = this.gameService.recoverUser(this.homeService.player.name);
    this.username = this.player.name;
    this.points = this.player.score;
    this.myBet= Bet.Paper;
    this.yourBet= Bet.Paper;
    this.begin = false;
    this.beginI = false;
  }

}
