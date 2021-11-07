import { HomeService } from './home.service';
import { TestBed } from '@angular/core/testing';


describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get players and return them', ()=> {
    const players = service.getPlayers();
    let result,users;
    if(localStorage.getItem('players')){
      result = localStorage.getItem('players');
      if (result!==null){
        users = JSON.parse(result);
      }
    }
    expect(players).toEqual(users);
  });

  it('verify User and return true', ()=> {
    const result = service.verifyUser('Vilma')
    expect(result).toBeTrue();
  });

});
