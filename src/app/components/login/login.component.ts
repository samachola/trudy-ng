import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {}
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.user)
        .toPromise()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  validateEntries(data) {
    let message;
    if (!data.email || !data.password){
      message = 'email and password field is required';
      return message;
    } else {
      return true;
    }
  }

}
