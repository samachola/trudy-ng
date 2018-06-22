import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  private apiBaseUrl: string = environment.apiBaseUrl;
  constructor(public http: Http) { }

  /**
   * Login a new user
   * @param userData - User data
   */
  login(userData) {
    return this.http
      .post(`${this.apiBaseUrl}/auth/login`, userData)
      .map(this.handleResponse)
      .catch(this.handleError);
  }

  /**
   * Handle response from server.
   *
   * @param {Response} res - response object
   *
   * @returns {object} - response object
   *
   */
  handleResponse(res: Response) {
    const response = res.json();
    return response || {};
  }

  /**
   * Handle errors from server
   *
   * @param {Response} error http error
   *
   * @return {Observable} ErrorObservable
   */
  handleError(error: Response | any) {
    const message = error.json().message;
    return Observable.throw(message).toPromise()
    .catch(() => {});
  }

}
