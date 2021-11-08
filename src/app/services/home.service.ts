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

  getPlayers(): Player[]{
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

  reset(){
    console.log("reset")
    this.player = {
      name: "",
      score: 0
    }
    this.getPlayers();
  }

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  verifyUser(name: string): boolean{
    let player: any;
    this.player= {
      name: name,
      score: 0
    };
    this.getPlayers();
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
