import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../recipe.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';
import {DiscoverService} from '../discover.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  loadedRecipe: Recipe;
  constructor(
      private activatedRoute: ActivatedRoute,
      private discoverService: DiscoverService,
      private router: Router,
      private alertCtrl: AlertController,
      private toastController: ToastController
  ) { }

  ngOnInit() {
    // ......
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) { return; }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.discoverService.getRecipe(recipeId);
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Recipe deleted',
      duration: 2000
    });

    await toast.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this recipe?',
      backdropDismiss: false, // ini biar cuman bisa click di alert doang, diluarnya gabisa
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler:  () => this.deleteRecipe()
        }
      ]
    });
    await  alert.present();
  }

  // function untuk hapus item
  deleteRecipe() {
    this.discoverService.deleteRecipe(this.loadedRecipe.id);
    // untuk navigate setelah menghapus kembali ke page sebelumnya
    this.router.navigate(['/recipes']);
    this.presentToast();
  }

}
