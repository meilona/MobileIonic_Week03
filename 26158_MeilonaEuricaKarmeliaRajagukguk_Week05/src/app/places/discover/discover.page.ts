import { Component, OnInit } from '@angular/core';
import {Place} from '../place.model';
import {PlacesService} from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: Place[];
  firstPlace: Place[];

  constructor(
      private placesService: PlacesService
  ) { }

  // ini cuman dijalanin sekali, initialization
  ngOnInit() {
    // this.recipes = this.recipesService.getAllRecipes();
  }

  // ini solusinya
  ionViewWillEnter(){
    this.firstPlace = this.placesService.getOnePlace();
    this.places = this.placesService.getAllPlaces();
  }
}
