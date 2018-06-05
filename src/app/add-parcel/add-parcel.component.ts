import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelDataService } from '../services/parcel-data.service';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit {
  public newParcel: Object = {};
  public submitted: boolean = false;
  
  public selectedPrevVal: string;
  public selectedCurrVal : string;
  public selectedCurrIndex : number;
  public changedItems : Array<any> = [];
  public showChangeItems : Array<any> = [];
  constructor(private _PDS: ParcelDataService ) {
   }

  ngOnInit() {
  }
  /**
   * Getting data from child component
   * finding the changes and updating the data source
   */
  onSelectedItem(value){
    this.changedItems = value;
    for(let i in this.changedItems){
      let prevValue = this._PDS.parcelData[this.changedItems[i].index].selectedItem;
        let currValue = this.changedItems[i].newSelectedItem;
        let orderId =  this._PDS.parcelData[this.changedItems[i].index].id;
        this._PDS.parcelData[this.changedItems[i].index].selectedItem = currValue;
        let changedElem = this.showChangeItems.find(x => orderId == x.orderId);
        if(changedElem){
          changedElem.prevValue = prevValue;
          changedElem.currValue = currValue;
        } else{
          this.showChangeItems.push({
          'orderId': orderId,
          'prevValue': prevValue,
          'currValue':currValue,
          'index':''
        });
        }
        
    }
  }
  get diagnostic(){
    return JSON.stringify(this.newParcel);
  }

  /**
   * Updating the Service singleton instance 
   * Empyting the data source after successful submission
   */
  saveChanges(){
    console.log('save');
    if(this.changedItems.length>0){
      for(let i in this.changedItems){
        let currValue = this.changedItems[i].newSelectedItem;
        let orderId =  this._PDS.parcelData[this.changedItems[i].index].id;
        this._PDS.parcelData[this.changedItems[i].index].selectedItem = currValue;
      }
    }
   this.changedItems = [];
   this.showChangeItems=[];
  }


   

}
