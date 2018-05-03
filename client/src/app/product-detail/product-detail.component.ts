import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActionSequence } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  products: any[];
  obs;
  id;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { 
    this.getDetail();
  }

  getDetail() {

    this.obs = Observable.combineLatest([
      this.productService.getProducts(),
      this.route.params
    ])

    this.obs.subscribe(res => {
      this.products = res[0];
      this.id = res[1]['id'];
    });
    
  }

}
