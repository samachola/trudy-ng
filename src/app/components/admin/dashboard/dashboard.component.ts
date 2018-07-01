import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAllUsers()
                    .toPromise()
                    .then((res) => {
                      this.users = res.users;
                      console.log(this.users);
                    })
                    .catch(err => console.log(err));
  }

}
