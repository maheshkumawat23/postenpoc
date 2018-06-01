import { Component, OnInit } from '@angular/core';
import { HomeDataService } from './home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeDataService]
})
export class HomeComponent implements OnInit {
  public angularConcepts : Array<string>;
  public featuresList : Array<string>;
  public technologiesList: Array<string>;

  constructor(private _HDS: HomeDataService) {
  
   }

  ngOnInit() {
    this.angularConcepts = this._HDS.getAngularConcepts();
    this.featuresList = this._HDS.getFeaturesList();
    this.technologiesList = this._HDS.getTechnologyList();
  }

}
