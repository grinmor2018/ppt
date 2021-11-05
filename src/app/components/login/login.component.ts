import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.name = "";
  }

  ngOnInit() {
  }

  login(name:string){
    if(name){
      let result = this.loginService.verifyUser(name);
      if (result){
        this.router.navigate(["/play"]);
      }
    }

  }

}
