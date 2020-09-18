import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    {
      id: 'p1',
      title: 'UMN Apartment',
      description: 'Apartmen for UMN Students',
      imageUrl: 'https://inhabitat.com/wp-content/blogs.dir/1/files/2015/08/Park-and-Garden-Luxury-Apartments.jpg',
      price: 2100000
    },
    {
      id: 'p2',
      title: 'Cluster Alloggio',
      description: 'Boarding House for Everyone',
      imageUrl: 'https://bsd.city/wp-content/uploads/2019/11/Cluster-Alloggio-Gading-Serpong.jpg',
      price: 1250000
    },
    {
      id: 'p3',
      title: 'JHL Solitaire',
      description: 'Hotel for Everyone',
      imageUrl: 'https://cf.bstatic.com/images/hotel/max1280x900/170/170575410.jpg',
      price: 4500000
    }
  ];

  constructor() { }

  getAllPlaces(){
    return [...this.places];
  }

  getOnePlace(){
    // console.log('data : ', [this.places[0]]);
    return [this.places[0]];
  }

  getPlace(placeId: string) {
    return {...this.places.find(place => {
        return place.id === placeId;
      })};
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }
}
