import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../../services/partners/partners.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  partners = [];
  query = {};
  constructor(private partnersService: PartnersService) { }

  ngOnInit() {
    this.getCategories();
    this.partnersService.getAllPartners()
                  .toPromise()
                  .then((res) => {
                    this.partners = res;
                    console.table(this.partners);
                  })
                  .catch(err => console.log(err));
  }

  // Gets partners based on the filter.
  filterPartner() {
    console.log(this.query);
  }

  // get categories
  getCategories() {
    this.partnersService.getCategories()
                  .toPromise()
                  .then(res => console.log(res))
                  .catch(err => console.log(err));
  }

}
