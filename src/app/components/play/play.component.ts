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
  myBet: Bet;
  yourBet: Bet;

  constructor(
    private playService: PlayService,
    private loginService: LoginService
  ) {
    this.username = this.loginService.recoverUser('name');
    this.myBet= Bet.Paper;
    this.yourBet= Bet.Paper;
  }

  ngOnInit() {
  }

  back(){
    this.playService.back();
  }

  async bet(bet: number){
    this.yourBet= Bets[bet-1];
    console.log("myBet: ",this.yourBet);
    setTimeout(() => {this.bot()},1000);
  }

  bot(){
    let bet = this.playService.random(1,3);
    this.myBet = Bets[bet-1];
    let points = this.playService.checkResult(this.yourBet,this.myBet);
    console.log(points);
  }

}
