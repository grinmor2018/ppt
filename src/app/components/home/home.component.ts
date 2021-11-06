import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) {
    this.name = "";
  }

  ngOnInit() {
  }

  async login(username:string){
    if(username){
      let result = await this.homeService.verifyUser(username);
      if (result){
        this.router.navigate(["/game"]);
      }
    }
  }

}
