import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ParcelDataService {
  private parcelUrl = "../../assets/data/parcel.json";
  private messageSource = new BehaviorSubject('');
  private dateSource = new BehaviorSubject({});
  public currentInput = this.messageSource.asObservable();
  public dateInputs = this.dateSource.asObservable();
  public parcelData = [];
  public savedFormInputsData = {};

  constructor(private http: HttpClient) {
      this.savedFormInputsData = {
        order_id : '',
        name : ''
      }
   }

  getOrdersListFromApi(){
    this.http.get<Order[]>(this.parcelUrl).subscribe(res =>{})
  }
  /**
   * {params :void }
   * returns Orders Observable -> get parcels data from end point API
   */
  getOrdersList(): Observable<Order[]> {
    return this.http.get<Order[]>(this.parcelUrl);
  }
  /**
   * {params} message : string -> keyboard input from side filter
   * returns Observable -> pass search Input from user to messageSource Observers
   */
  changeSearchInput(message :string){
    this.messageSource.next(message);
  }
 /**
  * {parms : void}
  * Returns Observable -> pass empty object to dateInputs Observers
  */
  resetDateInput(){
    this.dateSource.next({});
  }

}
