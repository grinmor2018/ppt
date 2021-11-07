import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  result: boolean = false;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['',[Validators.required]]
    })
  }

  login(){
    let username = this.form.value.name;
    console.log(this.result);
    if(username){
      this.result = this.homeService.verifyUser(username);
      console.log(this.result);
      if (this.result){
        this.router.navigate(["/game"]);
      }
    }
  }

}
