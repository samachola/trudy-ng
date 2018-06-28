import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  error: string;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  onSubmit() {
    this.auth.login(this.user)
             .toPromise()
             .then((res) => {
               localStorage.setItem('token', res.token);
               this.router.navigate(['dashboard']);
             })
             .catch((err) => {
               this.error = err.email || err.password || err.error;
             });
  }

  validateEntries(data) {
    let message;
    if (!data.email || !data.password) {
      message = 'email and password field is required';
      return message;
    } else {
      return true;
    }
  }

}
