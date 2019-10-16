import { Injectable } from '@angular/core';

type SignedInWith = 'Google' | 'Apple' | 'Telegram' | 'GitHub';

export interface IUser {
  givenName: string;
  familyName: string;
  email: string;
  isAdmin: boolean;
  isReviewer: boolean;
  signedInWith: SignedInWith;
  icon: string;
  created: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  richieUser: IUser;

  public logIn(service: SignedInWith) {
    if (localStorage.getItem('richie-user')) {
      const user = JSON.parse(localStorage.getItem('richie-user'));
      this.richieUser = user;
    } else {
      window.location.href = `http://localhost:3000/api/auth/${service}`;
    }
  }

  public checkToken() {
    if (!localStorage.getItem('richie-user')) {
      const token = decodeURIComponent(document.cookie)
        .split(';')
        .filter(c => c.match(/\s?token=/))
        .map(c => c.split('=')[1])[0];
      this.richieUser = this.parseToken(token);
      localStorage.setItem('richie-user', JSON.stringify(this.richieUser));
    }
  }

  private parseToken(token: string): IUser {
    const {
      familyName,
      givenName,
      email,
      created,
      isAdmin,
      isReviewer,
      picture
    } = JSON.parse(atob(token.split('.')[1]));
    return {
      created,
      email,
      familyName,
      givenName,
      icon: picture,
      isAdmin,
      isReviewer,
      signedInWith: 'Apple'
    };
  }

  public logOut() {
    localStorage.removeItem('richie-user');
    this.richieUser = null;
  }
}