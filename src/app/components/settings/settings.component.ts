import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
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
  categories: any;

  @ViewChild('search' ) public searchElement: ElementRef;
  constructor(
    private categoriesService: CategoriesService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    ) { }

  user: any;
  ngOnInit() {
    const currentUser = localStorage.getItem('user');
    this.user = JSON.parse(currentUser);
    console.log(this.user);

    this.getCategories();

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

}
