import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Bet } from '../models/bets-enum';
import { Player } from '../models/player.model';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  player!: Player;
  players: Player[]=[];

  constructor(
    private router: Router,
    private homeService: HomeService
  ) {}

  back(){
    this.router.navigate(['/home']);
  }

  async checkResult(myBet:Bet, yourBet:Bet): Promise<number>{
    let result = 0;
    if (myBet === yourBet){
      result = 1;
    } else if(myBet === Bet.Rock){
      if (yourBet === Bet.Scissors){
        result = 0;
      }
      if (yourBet === Bet.Paper){
        result = 3;
      }
    } else if(myBet === Bet.Paper){
      if (yourBet === Bet.Rock){
        result = 0;
      }
      if (yourBet === Bet.Scissors){
        result = 3;
      }
    }else if((myBet === Bet.Scissors)){
      if (yourBet === Bet.Paper){
        result = 0;
      }
      if (yourBet === Bet.Rock){
        result = 3;
      }
    }
    return result
  }

  async updateUser(player: Player, points: number){
    this.players = await this.homeService.getPlayers();
    let playerUpdate = this.players.find(p=>p.name===player.name);
    if(playerUpdate!==undefined){
      let i = this.players.indexOf(playerUpdate);
      this.players.splice(i, 1);
      playerUpdate.score = points;
      this.players.push(playerUpdate);
      localStorage.setItem('players',JSON.stringify(this.players));
    }
  }

  random(min: number, max: number) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  async recoverUser(name:string): Promise<Player>{
    let players = await this.homeService.getPlayers();
    let player: any;
    if (players){
      player = players.find(p=>p.name===name);
      this.player = {
        name: player.name,
        score: player.score
      };
    }
    return this.player
  }

}
