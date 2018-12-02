import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { MapsAPILoader } from '@agm/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { RequestsService } from '../../services/requests/requests.service';
import { PartnersService } from '../../services/partners/partners.service';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {


  profile: boolean;
  timeline: boolean;
  settings = false;
  id: number;
  private sub: any;
  user: any;
  currentUser = false;
  lat = -1.2921;
  lng = 36.8219;
  categories: any;
  category: number;
  date: any;
  time: any;
  description: any;
  loggedInUser: any;
  requests: any;

  @ViewChild('search' ) public searchElement: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private categoriesService: CategoriesService,
    private requestsService: RequestsService,
    private partnerService: PartnersService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.userService.getUserDetails(this.id)
                      .toPromise()
                      .then(res => {
                        this.user = res;
                        this.loggedInUser = JSON.parse(localStorage.getItem('user'));
                        this.currentUser = (this.user.id === this.loggedInUser.id) ? true : false;
                      })
                      .catch(err => console.log(err));

      this.getUserLocation(this.id);

    });

    this.getCategories();
    this.getRequests();

    this.profile = true;
  }

  tab(state) {
    switch (state) {
      case 'profile':
        this.settings = false;
        this.timeline = false;
        this.profile = true;

        break;
      case 'settings':
        this.profile = false;
        this.timeline = false;
        this.settings = true;

        break;
      case 'timeline':
        this.profile = false;
        this.settings = false;
        this.timeline = true;

        break;
      default:
        this.settings = false;
        this.timeline = false;
        this.profile = true;
    }
  }

  /**
   * Get all Categories.
   *
   * @return {Array} - List of categories.
   */
  getCategories() {
    this.categoriesService.getAllCategories()
                          .toPromise()
                          .then(res => this.categories = res)
                          .catch(err => console.log(err));
  }

  getRequests() {
    this.requestsService.getAllRequests()
                        .toPromise()
                        .then((res) => {
                          this.requests = res.filter(resp => resp.partner_id === this.user.id);
                          console.table(this.requests);
                        })
                        .catch(err => console.log(err));
  }

  getUserLocation(id) {
    this.partnerService.getPatnerDetails(id)
                        .toPromise()
                        .then(res => {
                          this.lat = res.lat;
                          this.lng = res.lng;
                          console.log(this.lat, this.lng);
                        })
                        .catch(err => console.log(err));
  }

  /**
   * Set select dropdown value.
   * @param event - select dropdown onchange event.
   */
  public onChange(event): void {
    this.category = event.target.value;
  }

  /**
   * Set date value.
   * @param event - set date event.
   */
  public onDateChange(event): void {
    this.date = event.target.value;
  }

  /**
   * request Pro Services
   */
  requestPro() {
    const request = {
      date: this.date,
      category_id: this.category,
      client_email: this.loggedInUser.email,
      partner_id: this.user.id
    };

    this.requestsService.requestPro(request)
                        .toPromise()
                        .then((res) => {
                          if (res) {
                            window.location.reload();
                          }
                        })
                        .catch(err => console.log(err));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
