import { Component, OnInit } from '@angular/core';
import {Place} from '../../place.model';
import {ActivatedRoute} from '@angular/router';
import {PlacesService} from '../../places.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.page.html',
  styleUrls: ['./offer-detail.page.scss'],
})
export class OfferDetailPage implements OnInit {

  loadedPlace: Place;
  constructor(
      private activatedRoute: ActivatedRoute,
      private discoverService: PlacesService
  ) { }

  ngOnInit() {
    // ......
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) { return; }
      const placeId = paramMap.get('placeId');
      this.loadedPlace = this.discoverService.getPlace(placeId);
    });
  }

  ionViewWillEnter(){

  }

}
