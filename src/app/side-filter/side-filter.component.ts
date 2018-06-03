import { Component, OnInit } from '@angular/core';
import { ParcelDataService } from '../services/parcel-data.service';
import { fromEvent } from 'rxjs/observable/fromEvent'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent implements OnInit {
 public query: any = {};
 public searchText : string='';
 constructor(private _PDS : ParcelDataService) { }

  ngOnInit() {
     this._PDS.currentInput.subscribe(searchText => this.searchText = searchText);
     this._PDS.dateInputs.subscribe(query => this.query = query);
  }
 /**
  * {params {string}: SearchValue} - Keyboard Input value
  */
  onSearchChange(searchValue : string ):void{
    this._PDS.changeSearchInput(searchValue);
  }
 /**
  * {params : void}
  * Reset the data, Empty the input fillds
  */
  resetInputs(){
    this.query={};
    this.searchText='';
    this._PDS.changeSearchInput(this.searchText);
    this._PDS.resetDateInput();
  }


}
