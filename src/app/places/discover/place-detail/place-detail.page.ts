import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Place} from '../../place.model';
import {PlacesService} from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

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
