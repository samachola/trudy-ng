import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class PartnersService {
  private apiBaseUrl: string = environment.apiBaseUrl;
  private token = localStorage.getItem('token');

  constructor(
    private http: HttpClient
  ) { }


  /**
   * Get all partners
   *
   * @returns {Observable} - Return list of users
   */
  getAllPartners() {
    return this.http.get(`${this.apiBaseUrl}/partners`)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  /**
   * Get partner details
   *
   * @param {integer} id - User id
   *
   * @returns {Observable} - Partner details
   */
  getPatnerDetails(id) {
    return this.http.get(`${this.apiBaseUrl}/partners/${id}`)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  /**
   * Get filtered partners
   * @param filter - filter params
   * @returns {Observable} - List of filtered partners
   */
  getFilteredPartners(filter) {
    return this.http.post(`${this.apiBaseUrl}/partners/filter`, filter)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  /**
   * Update partner detials
   *
   * @param partner - partner details.
   * @param partnerId - Partner id.
   *
   * @returns {Observable}
   */
  updatePartnerDetails(partner, partnerId) {
    const headers = new HttpHeaders().set('token', this.token);

    return this.http.put(`${this.apiBaseUrl}/partners/${partnerId}`, partner, {headers})
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

