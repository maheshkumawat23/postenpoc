import { Component, OnInit } from '@angular/core';
import { ParcelDataService } from '../services/parcel-data.service';

@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent implements OnInit {
  public toggle: any = {};
  public query: any = {};
  public parcelData: Array<any> = [];
  public searchText : string;
  constructor(private _PDS: ParcelDataService) { }

  ngOnInit() {
    this.getOrderList();
  }
 /**
  * {@params : void}
  * set parcel Data orders List
  */
  getOrderList(): void {
    this._PDS.getOrdersList().subscribe(res => {
      this.parcelData = res;
    }, error => {
      console.log(error);
    })
  }
  /**
   * {@params : index} - clicked index of the data
   * {return void } ->set display property of table-row
   */
  toggleRow(index): void {
    if (this.parcelData[index].style.display == "none")
      this.parcelData[index].style = {
        "display": "table-row"
      }
    else
      this.parcelData[index].style = {
        "display": "none"
      }
  }
}
