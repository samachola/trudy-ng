import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { MapsAPILoader } from '@agm/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { RequestsService } from '../../services/requests/requests.service';
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
  lat = 51.678418;
  lng = 7.809007;
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
    private requestsService: RequestsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.userService.getUserDetails(this.id)
                      .toPromise()
                      .then(res => {
                        this.user = res;
                        console.log({user: this.user});
                        this.loggedInUser = JSON.parse(localStorage.getItem('user'));
                        this.currentUser = (this.user.id === this.loggedInUser.id) ? true : false;
                      })
                      .catch(err => console.log(err));

    });

    this.getCategories();
    this.getRequests();

    this.profile = true;
    this.mapsAPILoader.load().then(
      () => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ['address']});
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            console.log(JSON.stringify(place.geometry.location));
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();

            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
        });
      }
    );
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

    console.log(request);

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
