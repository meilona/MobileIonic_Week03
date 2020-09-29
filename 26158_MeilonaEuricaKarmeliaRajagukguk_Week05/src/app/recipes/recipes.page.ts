import { Component, OnInit } from '@angular/core';
import {RecipesService} from './recipes.service';
import {Recipe} from './recipe.model';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  // recipes: Recipe[];

  constructor(
      // private recipesService: RecipesService
  ) { }

  // ini cuman dijalanin sekali, initialization
  ngOnInit() {
    // this.recipes = this.recipesService.getAllRecipes();
  }

  // ini solusinya
  ionViewWillEnter(){
    // this.recipes = this.recipesService.getAllRecipes();
  }
}
