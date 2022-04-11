import { Component, Input, OnInit } from '@angular/core';
import Product from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() data:Product = {
    imageUrl:"",
    productName:"",
    releaseDate:"",
    numOfReviews:0,
    description:""
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
