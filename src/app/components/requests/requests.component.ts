import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { PartnersService } from '../../services/partners/partners.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  partners = [];
  categories = [];
  category: number;
  query = {};
  filter = {};
  lat: number;
  lng: number;
  availablePartners: number;
  partnersText = 'partners';

  @ViewChild('search' ) public searchElement: ElementRef;
  constructor(
    private partnersService: PartnersService,
    private categoriesService: CategoriesService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.getCategories();
    this.partnersService.getAllPartners()
                  .toPromise()
                  .then((res) => {
                    this.partners = res;
                    this.availablePartners = res.length;
                  })
                  .catch(err => console.log(err));

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

  /**
   * Set select dropdown value.
   * @param event - select dropdown onchange event.
   */
  public onChange(event): void {
    this.category = event.target.value;
  }

  // Gets partners based on the filter.
  filterPatners() {
    const filter = {
      lat: this.lat,
      lng: this.lng,
      category: this.category,
    };

    this.partnersService.getFilteredPartners(filter)
                        .toPromise()
                        .then((res) => {
                          this.partners = res;
                          this.availablePartners = res.length;
                          this.partnersText = this.getFilteredCategory();
                        })
                        .catch(err => console.log(err));
  }

  // get categories
  getCategories() {
    this.categoriesService.getAllCategories()
                  .toPromise()
                  .then(res => {
                    this.categories = res;
                    console.log(res);
                  })
                  .catch(err => console.log(err));
  }

  getFilteredCategory() {
    console.log(this.categories);
    const filteredCategory = this.categories.filter((category) => this.category === category.id);
    return 'filteredCategory.name';
  }

}
