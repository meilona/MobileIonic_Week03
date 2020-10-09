import {Component, Input, OnInit} from '@angular/core';
import {LoadingController, ModalController, ToastController} from '@ionic/angular';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {ContactsService} from '../../contacts.service';
import {Contact} from '../../contact.model';

@Component({
  selector: 'app-modal-sample1',
  templateUrl: './modal-sample1.component.html',
  styleUrls: ['./modal-sample1.component.scss'],
})
export class ModalSample1Component implements OnInit {
  @Input() selectedContact: Contact;
  // private contact: Contact = {id: '', name: '', imageUrl: '', email: [], phoneNumber: []};

  constructor(
      private modalCtrl: ModalController,
      private loadingCtrl: LoadingController,
      private toastController: ToastController,
      private contactsService: ContactsService
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

  onSubmit(form: NgForm) {
    console.log('onSubmit');
    console.log(form);
    const email = form.value.email;
    const pNumber = form.value.phoneNumber;

    if (!form.valid) {
      return;
    }
    this.presentLoading().then(() => {
      const newContact: Contact = {
        id: 'c',
        name: form.value.name,
        imageUrl: form.value.imageUrl,
        phoneNumber: pNumber.split(','),
        email: email.split(',')
      };
      this.contactsService.addContact(newContact);
      this.modalCtrl.dismiss( 'success', 'confirm');
      this.presentToast();
    });
  }
}
