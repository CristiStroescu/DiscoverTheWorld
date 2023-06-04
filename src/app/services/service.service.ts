import { Injectable } from '@angular/core';
import { Service } from '../interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  services: Service[]=[
    {
      name:'TRAVEL',
      articleTitle:'Article title',
      about: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...'
    },
    {
      name:'TRAVEL ARRANGEMENTS',
      articleTitle: 'Article title',
      about:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...' 
    },
    {
      name:'OUR PROFESSIONAL GUIDE',
      articleTitle:'Article title',
      about:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...' 
    },
    {
      name:'ACTIVITIES',
      articleTitle:'Article title' ,
      about:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...' 
    }
  ]
}
