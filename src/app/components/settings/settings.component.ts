import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { PartnersService } from '../../services/partners/partners.service';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  lat: number;
  lng: number;
  location: string;
  categories: any;
  category: number;
  partner: any;
  isPartner: boolean;
  partnerDetails = {};

  @ViewChild('search' ) public searchElement: ElementRef;
  constructor(
    private categoriesService: CategoriesService,
    private partnerService: PartnersService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    ) { }

  user: any;
  ngOnInit() {
    const currentUser = localStorage.getItem('user');
    this.user = JSON.parse(currentUser);
    console.log(this.user);
    this.checkIsPartner(this.user.id);

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

  /**
   * Set select dropdown value.
   * @param event - select dropdown onchange event.
   */
  public onChange(event): void {
    this.category = event.target.value;
  }

  /**
   * Check if user is a partner and getDetails
   */
  checkIsPartner(id) {
    this.partnerService.getPatnerDetails(id)
                       .toPromise()
                       .then((res) => {
                         this.partner = res;
                         this.isPartner = true;
                         console.log(this.partner);
                        })
                       .catch(err => console.log(err));
  }

  /**
   * Create or update Partner.
   */
  createOrUpdatePartner() {
    const partner = {
      'user_id': this.user.id,
      'category': this.category,
      'lat': this.lat,
      'lng': this.lng,
      'location': this.location,
    };

    console.log(this.isPartner);
    this.isPartner ? this.updatePartner(partner) : this.createPartner(partner);
  }

  /**
   * Update existing partner details.
   *
   * @param partner - Partner Details
   */
  updatePartner(partner) {
    this.partnerService.updatePartnerDetails(partner, this.partner.id)
                        .toPromise()
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
  }

  /**
   * Create new partner
   *
   * @param partner - Partner details
   */
  createPartner(partner) {
    console.log('create');
  }

}
