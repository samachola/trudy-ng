import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { PartnersService } from '../../services/partners/partners.service';
import { CategoriesService } from '../../services/categories/categories.service';

import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';


@Component({
  selector: 'app-partner-registration',
  templateUrl: './partner-registration.component.html',
  styleUrls: ['./partner-registration.component.css']
})
export class PartnerRegistrationComponent implements OnInit {

  user = {};
  error: string;
  lat: number;
  lng: number;
  location: string;
  categories: any;
  category: number;

  @ViewChild('search') public searchElement: ElementRef;
  constructor(
    private auth: AuthService,
    private categoriesService: CategoriesService,
    private partnerService: PartnersService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategories();

    this.mapsAPILoader.load().then(
      () => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ['address']});
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();

            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            this.location = place.formatted_address;

            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
        });
      }
    );
  }

  /**
   * Set select dropdown value.
   * @param event - select dropdown onchange event.
   */
  public onChange(event): void {
    this.category = event.target.value;
  }

  onSubmit() {
    const userDetails = {...this.user, role: 2};
    this.auth.register(userDetails)
        .toPromise()
        .then(res => this.updatePartnerDetails(res))
        .catch((err) => {
          this.error = err.email || err.phone || err.name;
        });
  }

  updatePartnerDetails(user) {
    const newPartner = {
      user_id: user.id,
      category: this.category,
      location: this.location,
      lat: this.lat,
      lng: this.lng
    };

    this.partnerService.createNewPartner(newPartner)
                        .toPromise()
                        .then(res => {
                          this.router.navigate(['login']);
                        })
                        .catch((err) => console.error(err));
  }

  getCategories() {
    this.categoriesService.getAllCategories()
                          .toPromise()
                          .then(res => this.categories = res)
                          .catch(err => console.log(err));
  }

}
