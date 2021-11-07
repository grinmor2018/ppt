import { Bet } from '../../../app/models/bets-enum';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ GameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.player= {name: 'Berta', score:0}
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('bet rock', async ()=> {
    let testBet = await component.bet(1);
    expect(testBet).toEqual(Bet.Rock);
  });

  it('bet paper', async ()=> {
    let testBet = await component.bet(2);
    expect(testBet).toEqual(Bet.Paper);
  });

  it('bet scissors', async ()=> {
    let testBet = await component.bet(3);
    expect(testBet).toEqual(Bet.Scissors);
  });

  it('bot ', async ()=> {
    component.yourBet=Bet.Scissors;
    component.bot();
    expect(component.win).toBeFalse();
  });

});
