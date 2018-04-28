import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

interface IUsers {
  name: string;
  link: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

   users: IUsers[] = [{
    name: 'facebook',
    link: 'https://www.facebook.com/',
  }];

  userName = '';
  userLink = '';

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      userNameControl: new FormControl('', [ Validators.required, this.checkNameLength]),
      userLinkName: new FormControl('', [Validators.required, this.checkLinkCorrect]),
    });
  }



constructor() {}

addUser() {
  this.users.push({
    name: this.userName,
    link: this.userLink,
  });
  this.userLink = '';
  this.userName = '';
  this.form.reset();

}


 checkNameLength(control: FormControl) {
    if (control.value && control.value.length <= 4 ) {
      return {
        'lengthError': true
      };
    }
    return null;
 }

 checkLinkCorrect(control: FormControl) {
   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
   if (!re.test(control.value)) {
     return {
       'uncorrectLink': true
     };
   }
   return null;
 }

}
