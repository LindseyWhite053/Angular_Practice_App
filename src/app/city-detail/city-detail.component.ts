import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  @Input() TheCity: City = {
    name:'',
    state: '',
    population: 0
  }
  
  editMode: boolean = false;
  changeName: string ='';
  changeState: string = '';
  changePop: number = 0;

  // For delete we need an event emitter.
  // It's the "messenger" that will notify the parent (i.e. city-list)
  // that we want to be deleted
  @Output() remove: EventEmitter<City> = new EventEmitter<City>();

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    //Copy existing data into edit text boxes
    this.changeName = this.TheCity.name;
    this.changeState = this.TheCity.state;
    this.changePop = this.TheCity.population;
    this.editMode = true;
  }

  saveChanges(){
    // Copy the text boxes back into the object's data
    this.TheCity.name = this.changeName;
    this.TheCity.state = this.changeState;
    this.TheCity.population = this.changePop;
    this.editMode = false;
  }

  cancelChanges() {
    this.editMode = false;
  }

  delete(){
    this.remove.emit(this.TheCity)
  }

}
