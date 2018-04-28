import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() userItem: {name: string, link: string, count: number};
  @Input() users;
  @Input() user;

  count = 0;
  plus() {
    this.count++;
  }
  minus() {
    if(this.count > 0) {
      this.count--;
    }
  }

  deleteComp() {
    let deleteComponentIndex: number = this.users.indexOf(this.userItem);
    this.users.splice(deleteComponentIndex, 1);
  }
}

