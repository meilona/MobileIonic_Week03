import { Component, OnInit } from '@angular/core';
import {DiscoverService} from './discover.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  recipes: Recipe[];

  constructor(
      private discoverService: DiscoverService
  ) { }

  // ini cuman dijalanin sekali, initialization
  ngOnInit() {
    // this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter(){
    this.recipes = this.discoverService.getAllRecipes();
  }
}
