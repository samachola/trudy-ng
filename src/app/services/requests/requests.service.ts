import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RequestsService {

  private apiBaseUrl: string = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Request pro
   */
  requestPro(request) {
    return this.http.post(`${this.apiBaseUrl}/requests`, request)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  /**
   * Get All Requests
   */
  getAllRequests() {
    return this.http.get(`${this.apiBaseUrl}/requests`)
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
