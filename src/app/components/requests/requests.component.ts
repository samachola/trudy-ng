import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../../services/partners/partners.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
	partners = [];
  constructor(private partnersService: PartnersService) { }

  ngOnInit() {
		this.partnersService.getAllPartners()
												.toPromise()
												.then((res) => {
													this.partners = res;
												})
												.catch(err => console.log(err));
  }

}
