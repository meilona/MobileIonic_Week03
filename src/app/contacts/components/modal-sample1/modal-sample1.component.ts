import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../contact.model';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-modal-sample1',
  templateUrl: './modal-sample1.component.html',
  styleUrls: ['./modal-sample1.component.scss'],
})
export class ModalSample1Component implements OnInit {
  @Input() selectedContact: Contact;
  constructor(
      private modalCtrl: ModalController,
      private loadingCtrl: LoadingController,
      private toastController: ToastController
  ) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'New contact added.',
      color: 'success',
      duration: 2000
    });

    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding contact...',
      duration: 4000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  onAdd(){
    this.presentLoading().then(() => {
      this.modalCtrl.dismiss({message: 'New contact added'}, 'confirm');
      this.presentToast();
    });
  }
}
