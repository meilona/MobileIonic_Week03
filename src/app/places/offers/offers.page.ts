import { Component, OnInit } from '@angular/core';
import {Place} from '../place.model';
import {PlacesService} from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  places: Place[];

  constructor(
      private placesService: PlacesService
  ) { }

  // ini cuman dijalanin sekali, initialization
  ngOnInit() {
    // this.recipes = this.recipesService.getAllRecipes();
  }

  // ini solusinya
  ionViewWillEnter(){
    this.places = this.placesService.getAllPlaces();
  }

}
