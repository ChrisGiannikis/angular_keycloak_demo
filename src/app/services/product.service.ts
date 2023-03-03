import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import {environment} from "../../environments/environment";

const { productsApiURL } = environment;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(productsApiURL);
  }
}
