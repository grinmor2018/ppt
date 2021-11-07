import { Bet } from '../models/bets-enum';
import { GameService } from './game.service';
import { HomeService } from './home.service';
import { Player } from '../models/player.model';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';



describe('GameService', () => {
  let service: GameService;
  let homeService: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(GameService);
    localStorage.setItem('players',JSON.stringify([{name:"Vilma",score:0},{name:"Berta",score:1}]))
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check game results Tie', async ()=> {
    let bet1= Bet.Paper;
    let bet2= Bet.Paper;
    let check = false;
    let result = service.checkResult(bet1, bet2);
    if (await result === 1) {
      check = true
    };
    expect(check).toBeTrue();
  });

  it('check game results Win', async ()=> {
    let bet1= Bet.Paper;
    let bet2= Bet.Scissors;
    let check = false;
    let result = service.checkResult(bet1, bet2);
    if (await result === 3) {
      check = true
    };
    expect(check).toBeTrue();
  });

  it('check game results Loose', async ()=> {
    let bet1= Bet.Paper;
    let bet2= Bet.Rock;
    let check = false;
    let result = service.checkResult(bet1, bet2);
    if (await result === 0) {
      check = true
    };
    expect(check).toBeTrue();
  });

  it('recover user', ()=> {
    let name= 'Vilma';
    let player= service.recoverUser(name);
    expect(player).toEqual({name: 'Vilma', score: 0})
  })

  it('update user', ()=> {
    let player= {name:'Berta', score:1};
    let points = 2;
    let players = service.updateUser(player,points);
    expect(players).toEqual([{name:"Vilma",score:0},{name:"Berta",score:2}])
  })

});
