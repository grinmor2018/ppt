import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  name!: string;

  constructor() { }

  recoverUser(user:string){
    let name: any;
    if(user!=null){
      name = sessionStorage.getItem(user);
      return name
    }
  }

  verifyUser(name: string): boolean{
    let result = false;
    this.name = name;
    sessionStorage.setItem('name',name);
    if (name){
      result = true;
    }
    return result
  }

}
