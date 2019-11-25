import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/User';

@Injectable()
export class DataService {
  users: User[];

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

  getUsers (): User[] {
    console.log('fetching users from service.');
    return this.users;
  }

  addUser (user: User) {
    this.users.unshift(user);
  }

  getPosts()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }
}
