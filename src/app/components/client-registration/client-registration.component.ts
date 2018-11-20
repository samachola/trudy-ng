import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {

  user = {};
  error: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const userDetails = {...this.user, idcard: 'none', role: 1};
    this.auth.register(userDetails)
        .toPromise()
        .then(res => this.router.navigate(['login']))
        .catch((err) => {
          this.error = err.email || err.phone || err.name;
        });
  }

}
