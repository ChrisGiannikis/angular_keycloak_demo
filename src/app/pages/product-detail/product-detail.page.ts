import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {ProductDetailService} from "../../services/product-detail.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss']
})
export class ProductDetailPage implements OnInit {

  product$!: Observable<Product>;

  constructor(private route: ActivatedRoute, private productDetailService: ProductDetailService) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get("productId"));
    this.product$ = this.productDetailService.findById(productId);
  }

}
