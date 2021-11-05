import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Bet } from '../models/bets-enum';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(
    private router: Router
  ) { }

  back(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  async checkResult(myBet:Bet, yourBet:Bet): Promise<number>{
    console.log(myBet, yourBet);
    let result = 0
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

  random(min: number, max: number) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

}
