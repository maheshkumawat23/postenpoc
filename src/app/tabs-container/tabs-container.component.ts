import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelDataService } from '../services/parcel-data.service';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit {
  public firstTab: boolean=true;
  public secondTab: boolean;
  public parcelData: Array<any> = [];
  public changeTracker : Array<any>=[];
  public orderForm : FormGroup;

  @Input() tab1Title : String;
  @Input() tab2Title : String;

  @Output() selectedItem = new EventEmitter<any>();
  
  constructor(private _PDS: ParcelDataService,private _FB: FormBuilder) { }
   ngOnInit() {
    this.getOrderList();
    this.firstTab= true;
    this.createForm();
  }

  createForm(){
    this.orderForm = this._FB.group({
      order_id : ['', Validators.required],
      name:['',Validators.required],
      date:['', Validators.required]
    })
  }
   getOrderList(): void {
    this._PDS.getOrdersList().subscribe(res => {
      this.parcelData = res;
      this._PDS.parcelData = res;
      console.log(this._PDS.parcelData);
      console.log(this.parcelData);
    }, error => {
      console.log(error);
    })
  }

  onChange(newValue: any, parcel : any){
    let index = this.parcelData.indexOf(parcel);
    let changedItem = {
      index : index,
      newSelectedItem : newValue
    }
    let changedElem = this.changeTracker.find(x =>  x.index == changedItem.index);
    if(changedElem){
      changedElem.newSelectedItem = changedItem.newSelectedItem;
    } else{
      this.changeTracker.push(changedItem);
    }
    
    console.log(this.changeTracker);
    this.selectedItem.emit(this.changeTracker);
  }

}
