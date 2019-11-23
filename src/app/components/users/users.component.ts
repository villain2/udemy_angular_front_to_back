import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor(private dataService: DataService) {
    console.log('constructor ran');
  }

  ngOnInit(): void {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '500 Fleet St',
            city: 'Balimore',
            state: 'MD'
          },
          image: 'http://lorempixel.com/600/600/people/3'
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          age: 25,
          address: {
            street: '500 Fleet St',
            city: 'Balimore',
            state: 'MD'
          },
          image: 'http://lorempixel.com/600/600/people/2'
        },
        {
          firstName: 'Kenny',
          lastName: 'Omega',
          age: 33,
          address: {
            street: '225 Fleet St',
            city: 'Balimore',
            state: 'MD'
          },
          image: 'http://lorempixel.com/600/600/people/1'
        }
      ];

    this.loaded = true;
/*
    this.addUser({
      firstName: 'Seth',
      lastName: 'Rollins'
    });*/
  }

  addUser(user: User) {
    this.users.push(user);
  }
}

interface Address{
  street: string,
  city: string,
  state: string,
  zipcode: number
}
