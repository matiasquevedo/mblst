import { Component,ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { ItinerarioPage } from '../../pages/itinerario/itinerario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	
  constructor(public navCtrl: NavController) {

  }

  itinerario(){
  	this.navCtrl.push(ItinerarioPage);
  }

}
