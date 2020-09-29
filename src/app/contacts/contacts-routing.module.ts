import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';
import {Week06Component} from './components/week06/week06.component';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  },
  {
    path: ':contactId',
    loadChildren: () => import('./contact-detail/contact-detail.module').then( m => m.ContactDetailPageModule)
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes), IonicModule],
    exports: [RouterModule, Week06Component],
    declarations: [
        Week06Component
    ]
})
export class ContactsPageRoutingModule {}
