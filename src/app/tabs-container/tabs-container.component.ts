import { Component, OnInit,Input,Output,EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelDataService } from '../services/parcel-data.service';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit, OnChanges {
  public firstTab: boolean=true;
  public secondTab: boolean;
  public parcelData: Array<any> = [];
  public changeTracker : Array<any>=[];
  public orderForm : FormGroup;
  @Input() tabTitle: string='Select Items';
  @Output() selectedItem = new EventEmitter<any>();
  @Output() FormControlInputs = new EventEmitter<any>();
  @Input() submitted : boolean;
  
  ngOnChanges(changes){
  }
  constructor(private _PDS: ParcelDataService,private _FB: FormBuilder) { }
   ngOnInit() {
    this.getOrderList();
    this.firstTab= true;
    this.tabTitle = "Select Items";
    this.createForm();
  }
 /**
  * Create Form and set Form Controls
  */
  createForm(){
    this.orderForm = this._FB.group({
      order_id : ['', Validators.required],
      name:['',Validators.required]
    })
  }
  /**
   * Gets OrdersList from Parcel Data Service and initilaze data
   */
   getOrderList(): void {
    this._PDS.getOrdersList().subscribe(res => {
      this.parcelData = res;
      this._PDS.parcelData = res;
    }, error => {
      console.log(error);
    })
  }
  /**
   * Pass changed Drop Down data to parent;
   * Sotre it in a tracker and emit to parent;
   * {param : newValue: string} - Changed drop down
   * {parcel: Object} -> parcel which got changed
   */
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
    this.selectedItem.emit(this.changeTracker);
  }
  /**
   * Submits Forms when all fields are set
   */
  onFormInputChange(){
    if(this.orderForm['status']=='VALID'){
      this.FormControlInputs.emit(this.orderForm['value'])
    }
  }

}
