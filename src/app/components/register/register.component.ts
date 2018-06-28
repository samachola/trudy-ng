import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {};
  error: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.register(this.user)
        .toPromise()
        .then(res => console.log(res))
        .catch(err => console.log(err));
  }

}
