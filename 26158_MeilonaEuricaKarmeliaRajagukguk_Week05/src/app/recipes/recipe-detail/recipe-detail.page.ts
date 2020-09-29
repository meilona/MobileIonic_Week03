import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../recipes.service';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  // loadedRecipe: Recipe;
  constructor(
      // private activatedRoute: ActivatedRoute,
      // private recipesService: RecipesService,
      // private router: Router,
      // private alertCtrl: AlertController,
      // private toastController: ToastController
  ) { }

  ngOnInit() {
    // ......
    // this.activatedRoute.paramMap.subscribe(paramMap => {
    //   if (!paramMap.has('recipeId')) { return; }
    //   const recipeId = paramMap.get('recipeId');
    //   this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    // });
  }

  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Recipe deleted',
  //     duration: 2000
  //   });
  //
  //   await toast.present();
  // }
  //
  // async presentAlert() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Are you sure?',
  //     message: 'Do you really want to delete this recipe?',
  //     backdropDismiss: false, // ini biar cuman bisa click di alert doang, diluarnya gabisa
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       },
  //       {
  //         text: 'Delete',
  //         handler:  () => this.deleteRecipe()
  //       }
  //     ]
  //   });
  //   await  alert.present();
  // }
  //
  // // function untuk hapus item
  // deleteRecipe() {
  //   this.recipesService.deleteRecipe(this.loadedRecipe.id);
  //   // untuk navigate setelah menghapus kembali ke page sebelumnya
  //   this.router.navigate(['/recipes']);
  //   this.presentToast();
  // }

}
