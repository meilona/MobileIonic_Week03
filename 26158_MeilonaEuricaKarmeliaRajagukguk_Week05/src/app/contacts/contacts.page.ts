import { Component, OnInit } from '@angular/core';
import {Contact} from './contact.model';
import {ContactsService} from './contacts.service';
import {IonItemSliding, LoadingController, ModalController} from '@ionic/angular';
import {ModalSample1Component} from './components/modal-sample1/modal-sample1.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: Contact[];

  constructor(
      private contactsService: ContactsService,
      private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // this.contacts = this.contactsService.getAllContacts();
  }

  ionViewWillEnter(){
    this.contacts = this.contactsService.getAllContacts();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalSample1Component,
      componentProps: { selectedRecipe: this.contacts }
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });

    return await modal.present();
  }

  onFilterUpdate(event: CustomEvent) {
    console.log(event.detail);
  }

  prior(contact: Contact, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(contact.name, 'is set as priority contact');
  }

}
