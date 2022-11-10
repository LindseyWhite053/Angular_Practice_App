import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  NewName: string = '';
  NewState: string = '';
  NewPopulation: number = 0;

  showAdd: boolean = false;
  
  constructor(public CitySrv: CityService) { }

  ngOnInit(): void {
  }

  showAddForm(){
      this.showAdd = true
  }

  add(){
    this.CitySrv.get().push({
      name: this.NewName,
      state: this.NewState,
      population: this.NewPopulation
    });

    this.NewName = '';
    this.NewState = '';
    this.NewPopulation = 0;
  }

  cancel(){
    this.showAdd = false;
    this.NewName = '';
    this.NewState = '';
    this.NewPopulation = 0;
  }

  removeItem(whichCity: City) {
    // Loop through the list and look for whichCity
		// If we find it, we'll remove it.
		// We need to use an old-fashioned for loop
		// because that gives us the index. When we have
		// the index, we'll call splice(index, 1).
    for(let index = 0 ; index < this.CitySrv.get().length; index++){
      if (this.CitySrv.get()[index] == whichCity){
        this.CitySrv.get().splice(index, 1)
        return;
      }
    }
  }

}
