import { Injectable, PLATFORM_ID } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  player!: any;

  players: Player[]=[];

  constructor() {
    this.reset();
   }

  async getPlayers(): Promise<Player[]>{
    if(localStorage.getItem('players')){
      let players = localStorage.getItem('players');
      if (players !== null){
        this.players = JSON.parse(players);
      }
    } else {
      this.players = []
    }
    return this.players
  }

  async reset(){
    console.log("reset")
    this.player = {
      name: "",
      score: 0
    }
    await this.getPlayers();
  }

  async verifyUser(name: string): Promise<boolean>{
    let player: any;
    this.player= {
      name: name,
      score: 0
    };
    await this.getPlayers();
    if(this.players){
      player = this.players.find(p=>p.name===name);
      if(!player){
        this.players.push(this.player);
      }
    }
    localStorage.setItem('players',JSON.stringify(this.players));
    return true
  }

}
