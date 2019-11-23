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
          age: 70,
          address: {
            street: '500 Fleet St',
            city: 'Balimore',
            state: 'MD'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00')
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
          isActive: false,
          registered: new Date('02/02/2017 08:30:00')
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
          isActive: true,
          registered: new Date('06/12/2019 08:30:00')
        }
      ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
