import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../recipe.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {ModalSample1Component} from '../../components/modal-sample1/modal-sample1.component';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  loadedRecipe: Recipe;
  constructor(
      private activatedRoute: ActivatedRoute,
      private recipesService: RecipesService,
      private router: Router,
      private alertCtrl: AlertController,
      private toastController: ToastController,
      private modalCtrl: ModalController,
      private loadingCtrl: LoadingController,
      private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    // ......
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) { return; }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalSample1Component,
      componentProps: { selectedRecipe: this.loadedRecipe }
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });

    return await modal.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting recipe...',
      duration: 20000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  async presentAction() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Recipe Action',
      buttons: [{
        text: 'Edit',
        role: 'edit',
        icon: 'create-outline',
        handler: () => {
          console.log('Edit clicked');
        }
      }, { text: 'New', icon: 'add', handler: () => {console.log('New clicked'); }
      }, { text: 'Share', icon: 'share', handler: () => {console.log('Share clicked'); }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
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
    this.presentLoading().then(() => {
      this.recipesService.deleteRecipe(this.loadedRecipe.id);
      // untuk navigate setelah menghapus kembali ke page sebelumnya
      this.router.navigate(['/recipes']);
      this.presentToast();
    });
  }

}
