import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  verifyUser(name: string): boolean{
    let result = false;
    if (name){
      result = true;
    }
    return result
  }

}
