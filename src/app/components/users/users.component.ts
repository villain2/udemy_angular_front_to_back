import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor(private dataService: DataService) {
    console.log('constructor ran');
  }

  ngOnInit(): void {
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

    this.loaded = true;
  }

  onSubmit ({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form not valid.');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      //reset form
      this.form.reset();
    }
  }
}
