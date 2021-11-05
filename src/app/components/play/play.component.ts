import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bet,Bets } from 'src/app/models/bets-enum';
import { PlayService } from 'src/app/services/play.service';
import { LoginService } from '../../../app/services/login.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  username: string = "";
  myBet: Bet= Bet.Paper;
  yourBet: Bet = Bet.Paper;
  points: number = 0;
  begin: boolean = false;
  beginI : boolean = false;

  constructor(
    private playService: PlayService,
    private loginService: LoginService
  ) {
    this.reset();
  }

  ngOnInit() {
  }

  back(){
    this.playService.back();
  }

  async bet(bet: number){
      this.begin= true;
      this.yourBet= Bets[bet-1];
      console.log("myBet: ",this.yourBet);
      setTimeout(async () => {await this.bot()},1000);
  }

  async bot(){
    this.beginI = true;
    let bet = this.playService.random(1,3);
    this.myBet = Bets[bet-1];
    let points = await this.playService.checkResult(this.myBet,this.yourBet);
    this.points = this.points + points;
    console.log(this.points);
  }

  reset(){
    this.username = this.loginService.recoverUser('name');
    this.myBet= Bet.Paper;
    this.yourBet= Bet.Paper;
    this.begin = false;
    this.beginI = false;
    this.points = 0;
  }

}
