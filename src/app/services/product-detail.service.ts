import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../models/product.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const { productsApiURL } = environment;

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private readonly http: HttpClient){ }

  findById(productId: number): Observable<Product> {
    return this.http.get<Product>(productsApiURL + "/" + productId)
  }
}
