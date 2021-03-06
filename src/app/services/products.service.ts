import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../models/product';
import {Substitute} from '../models/substitute';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];

  constructor(private http:HttpClient) { }  

  getProducts():Observable<Product[]>
  {
       return this.http.get<Product[]>(environment.productsEndPoint);              
  }

  getSubstitutes(params: HttpParams):Observable<Substitute[]> //for product
  {
       return this.http.get<Substitute[]>(environment.substitutesEndPoint);              
  }

}
