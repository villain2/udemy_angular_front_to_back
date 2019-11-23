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
      age: 30,
      address: {
        street: '500 Fleet St',
        city: 'Balimore',
        state: 'MD'
      }
    };
  }
}

interface Address{
  street: string,
  city: string,
  state: string,
  zipcode: number
}
  /*
	name: string;
	age: number;
	email:string;
	address:Address; //object set down in the interface
	hobbies: string[];
	hello: any;
	posts: Post[];
	isEdit: boolean = false;

  constructor(private dataService: DataService) {
    // tslint:disable-next-line:indent
  	console.log('constructor ran');
  }

  ngOnInit() {
    console.log('ngOnInit ran');
    this.name 		= 'John Doe';
    this.age 		= 30;
    this.email 		= 'thekchunter@gmail.com';
    this.address 	= {
      street: '50 Main St.',
      city: 'Boston',
      state: 'MA',
      zipcode: 21117
    };
    this.hobbies = ['Writing', 'Watch movies', 'Write Code'];
    this.hello 	= 'hello';//this can be anything from a string to a number
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick ()
  {
    // tslint:disable-next-line:indent
  	this.name 	= 'Steve Smith';
  	this.hobbies.push('New Hobby');
    // tslint:disable-next-line:indent
  	console.log("You have clicked me!");
  }

  addHobby(hobby)
  {
  	console.log(hobby);
  	this.hobbies.unshift(hobby);
  	return false;
  }

  deleteHobby(hobby)
  {
  	for(let i = 0; i < this.hobbies.length; i++)
  	{
  		if(this.hobbies[i] == hobby)
  		{
  			this.hobbies.splice(i,1);
  		}
  	}
  }

  toggleEdit()
  {
  	this.isEdit = !this.isEdit;
  }

}

interface Address{
		street: string,
		city: string,
		state: string,
		zipcode: number
}

interface Post {
	id: number,
	title: string,
	body: string,
	userID: number
}
*/
