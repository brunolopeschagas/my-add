import { Component, OnInit } from '@angular/core';
import { ProdutcService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: string[] = [];

  constructor(productService: ProdutcService) { 
    this.products = productService.getProducts();
  }

  ngOnInit(): void {
  }

}
