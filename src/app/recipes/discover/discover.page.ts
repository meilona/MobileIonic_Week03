import { Component, OnInit } from '@angular/core';
import {DiscoverService} from './discover.service';
import {Recipe} from '../recipe.model';
import {RecipesService} from '../recipes.service';
import {IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  recipes: Recipe[];
  data2 = 'hehe';

  constructor(
      private recipesService: RecipesService
  ) { }

  // ini cuman dijalanin sekali, initialization
  ngOnInit() {
    // this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter(){
    this.recipes = this.recipesService.getAllRecipes();
  }

  onFilterUpdate(event: CustomEvent) {
    console.log(event.detail);
  }

  fav(recipe: Recipe, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(recipe.title, 'added to favorite');
  }

  share(recipe: Recipe, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('Share', recipe.title, 'to social media');
  }
}
