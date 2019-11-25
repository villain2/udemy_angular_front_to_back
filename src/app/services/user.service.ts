import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {User} from '../models/User';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor(public http: Http) {
    console.log('Data service connected ...');
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@hotmail.com',
        isActive: false,
        registered: new Date('02/02/2017 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kenny',
        lastName: 'Omega',
        email: 'komega@aew.com',
        isActive: true,
        registered: new Date('06/12/2019 08:30:00'),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser (user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getPosts()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }
}
