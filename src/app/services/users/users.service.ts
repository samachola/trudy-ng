import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UsersService {
  private apiBaseUrl: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }


  /**
   * Get all users
   *
   * @returns {Observable} - Return list of users
   */
  getAllUsers() {
    return this.http.get(`${this.apiBaseUrl}/users`)
                    .map(this.handleResponse)
                    .catch(this.handleError);

	}
	
	/**
	 * Get user details.
	 * 
	 * @param id
	 * 
	 * @return { Observable } - user details.
	 */
	getUserDetails(id) {
		return this.http.get(`${this.apiBaseUrl}/users/${id}`)
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
