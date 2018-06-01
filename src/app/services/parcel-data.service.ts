import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ParcelDataService {
  private parcelUrl = "../../assets/data/parcel.json";
  constructor(private http: HttpClient) { }
  getOrdersList () : Observable<Order[]>{
    return this.http.get<Order[]>(this.parcelUrl);
  }
}
