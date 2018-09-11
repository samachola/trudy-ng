import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { MapsAPILoader } from '@agm/core';
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

  @ViewChild('search' ) public searchElement: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.userService.getUserDetails(this.id)
                      .toPromise()
                      .then(res => {
                        this.user = res;
                        const loggedInUser = JSON.parse(localStorage.getItem('user'));
                        this.currentUser = (this.user.id === loggedInUser.id) ? true : false;
                      })
                      .catch(err => console.log(err));

    });

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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
