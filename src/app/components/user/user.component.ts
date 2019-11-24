import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private dataService: DataService) {
    console.log('constructor ran');
  }

  ngOnInit(): void {
    console.log('init ...');
    /*this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });*/
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com'
    };
  }
}

interface Address{
  street: string,
  city: string,
  state: string,
  zipcode: number
}
