import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  TheList: City[] = [
    { name: 'Grand Rapids', state: 'MI', population: 100000},
    { name: 'Chicago', state: 'IL', population: 180000},
    { name: 'Toledo', state: 'OH', population: 950000}
  ];

  //Add a getter function
  get(): City[] {
    return this.TheList;
  }
  
  constructor() { }
}
