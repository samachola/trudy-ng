import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  private apiBaseUrl: string = environment.apiBaseUrl;

  constructor(public http: HttpClient) { }

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
   * Register a new user
   * @param userData - register a new user
   *
   * @return {Object}
   */
  register(userData) {
    console.table(userData);
    return this.http
      .post(`${this.apiBaseUrl}/auth/register`, userData)
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
  handleResponse(res: HttpResponse<Object>) {
    const response = res;
    return response || {};
  }

  /**
   * Handle errors from server
   *
   * @param {Response} error http error
   *
   * @return {Observable} ErrorObservable
   */
  handleError(error: HttpResponse<Object> | any ) {
    const message = error.error;
    return Observable.throw(message);
  }

}
