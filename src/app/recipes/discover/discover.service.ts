import { Injectable } from '@angular/core';
import {Recipe} from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  // private recipes: Recipe[] = [
  //   {
  //     id: 'r1',
  //     title: 'Nasi Goreng',
  //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Nasi_goreng_indonesia.jpg',
  //     ingredients: ['Nasi', 'Bawang Putih', 'Kecap', 'Cabai']
  //   },
  //   {
  //     id: 'r2',
  //     title: 'Gado-gado',
  //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Gado_gado.jpg',
  //     ingredients: ['Lontong', 'Tempe', 'Tahu', 'Timun']
  //   }
  // ];

  constructor() { }

  // getAllRecipes(){
  //   return [...this.recipes];
  // }
  //
  // getRecipe(recipeId: string) {
  //   return {...this.recipes.find(recipe => {
  //       return recipe.id === recipeId;
  //     })};
  // }
  //
  // deleteRecipe(recipeId: string) {
  //   // filter = salah satu fungsi array
  //   this.recipes = this.recipes.filter(recipe => {
  //     // yang tidak sama dengan id recipe di filter
  //     return recipe.id !== recipeId;
  //   });
  // }
}
