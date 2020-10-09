import { Injectable } from '@angular/core';
import {Contact} from './contact.model';
import {strict} from 'assert';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[] = [
    {
      id: 'c1',
      name: 'John Thor',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/ThawKavanaghQC.jpg',
      phoneNumber: ['081122334455', '081234567890'],
      email: ['john.thor@umn.ac.id', 'hello@johnthor.com'],
    },
    {
      id: 'c2',
      name: 'John Wick',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg',
      phoneNumber: ['087812312300', '081512131415', '088899552151'],
      email: ['john.wick@umn.ac.id', 'john.wick@gmail.com'],
    }
  ];
  constructor() { }

  addContact(contact: Contact){
    const idSize: number = this.contacts.length + 1;

    const newItem: Contact = {
      id: contact.id + idSize,
      name: contact.name,
      imageUrl: contact.imageUrl,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    };
    this.contacts.push(newItem);
    console.log(newItem);
  }

  editContact(contact: any, selectedIndex: any){
    this.contacts[selectedIndex] = contact;
    console.log(contact);
  }

  getAllContacts(){
    return [...this.contacts];
  }

  getContact(contactId: string) {
    return {...this.contacts.find(contact => {
        return contact.id === contactId;
      })};
  }

  deleteContact(contactId: string) {
    // filter = salah satu fungsi array
    this.contacts = this.contacts.filter(contact => {
      // yang tidak sama dengan id recipe di filter
      return contact.id !== contactId;
    });
  }
}
