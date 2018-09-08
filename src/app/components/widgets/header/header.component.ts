import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated = false;
  currentUser: any;
  constructor(private router: Router) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.currentUser = JSON.parse(user);
    this.authenticated = (!user) ? false : true;
  }

  logout() {
    localStorage.clear();
  }

}
